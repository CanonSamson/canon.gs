'use client'

import React from 'react'

export default function Home () {
  return (
    <div className='flex flex-col bg-white pt-10 p-8 w-full items-center mt-0 sm:mt-20'>
      <div className='flex flex-row items-center justify-center w-full max-w-[1300px] gap-20'>
        <div className='flex flex-col items-start gap-6'>
          <div className='text-gray-800 text-2xl font-light flex flex-col items-start gap-4'>
            <span className='mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-2'>
              Hi, my name is Canon Samson{' '}
              <img
                src='/profile.png'
                alt='Avatar'
                className='w-10 h-10 rounded-full'
              />
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2'>
              I&apos;m building Nigeria Creators
              <span className='inline-flex relative group/apps gap-2 sm:gap-0'>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/ellie'
                >
                  <img
                    src='/apps/nigeria-creator.png'
                    alt='Nigeria Creators'
                    className='w-10 h-10 sm:transform sm:-rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-0 sm:translate-x-2 transition-all duration-200 relative z-10 rounded-xl cursor-pointer border border-gray-200 shadow-sm'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 sm:group-hover/ellie:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    Connect creators in Nigeria with brands
                  </span>
                </a>
              </span>
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2'>
              <span>and make youtube videos about building</span>
              <a
                href='https://www.youtube.com/@Canon_gs'
                target='_blank'
                rel='noopener noreferrer'
                className='relative group'
              >
                <img
                  src='https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_youtube-512.png'
                  alt='YouTube'
                  className='w-10 h-10 inline-block align-middle rounded-xl cursor-pointer sm:rotate-6 sm:hover:rotate-0 transition-all duration-200'
                />
                <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                  @Canon_gs
                </span>
              </a>
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2 mt-10'>
              <span>I also post regularly on these platforms</span>
              <span className='inline-flex relative group/socialmedia gap-2 sm:gap-0'>
                <div className='relative group/twitter'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg'
                    alt='Twitter'
                    className='w-10 h-10 sm:transform sm:-rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-0 sm:translate-x-2 transition-all duration-200 relative z-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/twitter:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon_g_s
                  </span>
                </div>
                <div className='relative group/instagram'>
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
                    alt='Instagram'
                    className='w-10 h-10 sm:transform sm:rotate-3 sm:group-hover:rotate-0 sm:group-hover:translate-x-2 transition-all duration-200 relative z-20 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-10 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/instagram:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon_gs
                  </span>
                </div>
                <div className='relative group/tiktok'>
                  <img
                    src='https://thumbs.dreamstime.com/b/tiktok-social-media-app-icon-tiktok-social-media-app-icon-square-shape-vector-illustration-269930887.jpg'
                    alt='TikTok'
                    className='w-10 h-10 sm:transform sm:-rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-4 sm:-translate-x-4 transition-all duration-200 relative z-30 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-8 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/tiktok:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon__gs
                  </span>
                </div>
                <div className='relative group/linkedin'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s'
                    alt='LinkedIn'
                    className='w-10 h-10 sm:transform sm:rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-6 sm:-translate-x-6 transition-all duration-200 relative z-40 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/linkedin:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon-samson
                  </span>
                </div>
              </span>
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2 mt-8'>
              <span>
                Curious about my tech stack?{' '}
                <a
                  href='https://portfolio.canongss.com/skills'
                  className='text-blue-600 hover:text-purple-600 transition-colors'
                >
                  Click here.
                </a>
              </span>
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2 mt-8'>
              <span>
                Lastly, I’m also a Co-founder of a startup called{' '}
                <a
                  href='https://www.medvive.ng/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-purple-600 transition-colors'
                >
                  Medvive
                </a>
                <br />   where you can consult with doctors online from the comfort of your
            home.
              </span>
            </span>
            <div className='w-full border-t border-dotted border-gray-300 my-10'></div>
            <span className='inline-flex flex-col relative group items-start gap-2 text-lg'>
              <span>
                Need dev/design help for your company?{' '}
                <a
                  href='mailto:samsoncanon2018@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-purple-600 transition-colors'
                >
                  Click here.
                </a>
              </span>
              <span>
                Want to say hi?{' '}
                <a
                  href='mailto:samsoncanon2018@gmail.com'
                  className='text-blue-600 hover:text-purple-600 transition-colors'
                >
                  Click here.
                </a>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
