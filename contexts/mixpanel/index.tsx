'use client'

import mixpanel from 'mixpanel-browser'
import { usePathname } from 'next/navigation'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  RefObject
} from 'react'

const isDev = false

// Type definitions
interface MixPanelContextType {
  mixpanel: typeof mixpanel | null
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackSectionView: (
    sectionName: string,
    properties?: Record<string, any>
  ) => void
  trackSectionInteraction: (
    sectionName: string,
    interactionType: string,
    properties?: Record<string, any>
  ) => void
}

interface MixPanelProviderProps {
  children: ReactNode
}

// Context for Mixpanel
const MixPanelContext = createContext<MixPanelContextType | undefined>(
  undefined
)

const MixPanelProvider: React.FC<MixPanelProviderProps> = ({ children }) => {
  const pathname = usePathname()
  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  useEffect(() => {
    // Only initialize mixpanel on the client side
    if (typeof window !== 'undefined' && !isInitialized) {
      if (isDev) {
        console.log('[DEV MODE] Mixpanel init suppressed')
        return
      }
      const mixPanelKey = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || null

      if (!mixPanelKey) return
      mixpanel.init(mixPanelKey, {
        autocapture: true,
        record_sessions_percent: 100,
        api_host: 'https://api-eu.mixpanel.com'
      })
      setIsInitialized(true)
    }
  }, [isInitialized])

  useEffect(() => {
    const handleRouteChange = (): void => {
      if (isDev) {
        console.log('[DEV MODE] Mixpanel pageview suppressed:', { pathname })
        return
      }
      if (isInitialized && typeof window !== 'undefined') {
        mixpanel.track_pageview()
      }
    }

    handleRouteChange()

    return () => {
      // Any cleanup can be done here if necessary
    }
  }, [pathname, isInitialized])

  const trackEvent = (
    eventName: string,
    properties?: Record<string, any>
  ): void => {
    if (isDev) {
      console.log('[DEV MODE] Mixpanel trackEvent suppressed:', {
        eventName,
        properties
      })
      return
    }
    if (isInitialized && typeof window !== 'undefined') {
      mixpanel.track(eventName, properties)
    }
  }

  const trackSectionView = (
    sectionName: string,
    properties?: Record<string, any>
  ): void => {
    if (isDev) {
      console.log('[DEV MODE] Mixpanel trackSectionView suppressed:', {
        sectionName,
        properties
      })
      return
    }
    if (isInitialized && typeof window !== 'undefined') {
      mixpanel.track('SECTION_VIEWED', {
        section_name: sectionName,
        page_path: pathname,
        timestamp: new Date().toISOString(),
        ...properties
      })
    }
  }

  const trackSectionInteraction = (
    sectionName: string,
    interactionType: string,
    properties?: Record<string, any>
  ): void => {
    if (isDev) {
      console.log('[DEV MODE] Mixpanel trackSectionInteraction suppressed:', {
        sectionName,
        interactionType,
        properties
      })
      return
    }
    if (isInitialized && typeof window !== 'undefined') {
      mixpanel.track('SECTION_INTERACTION', {
        section_name: sectionName,
        interaction_type: interactionType,
        page_path: pathname,
        timestamp: new Date().toISOString(),
        ...properties
      })
    }
  }

  return (
    <MixPanelContext.Provider
      value={{
        mixpanel: isInitialized ? mixpanel : null,
        trackEvent,
        trackSectionView,
        trackSectionInteraction
      }}
    >
      {children}
    </MixPanelContext.Provider>
  )
}

function useMixPanel (): MixPanelContextType {
  const context = useContext(MixPanelContext)
  if (context === undefined) {
    throw new Error('MixPanelContext must be used within a MixPanelProvider')
  }
  return context
}

// Hook for automatically tracking section visibility
function useSectionTracking<T extends Element> (
  sectionName: string,
  sectionRef: RefObject<T | null>,
  options?: {
    threshold?: number
    rootMargin?: string
    properties?: Record<string, any>
    once?: boolean
  }
): void {
  const { trackSectionView } = useMixPanel()
  const [hasTracked, setHasTracked] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (options?.once && hasTracked) return

            trackSectionView(sectionName, {
              ...options?.properties,
              visibility_percentage: Math.round(entry.intersectionRatio * 100)
            })

            if (options?.once) {
              setHasTracked(true)
            }
          }
        })
      },
      {
        threshold: options?.threshold || 0.5,
        rootMargin: options?.rootMargin || '0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [sectionName, sectionRef, trackSectionView, options, hasTracked])
}

export { MixPanelProvider, useMixPanel, useSectionTracking }
export type { MixPanelContextType, MixPanelProviderProps }
