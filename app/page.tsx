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
                className='w-10 h-10 object-cover rounded-full'
              />
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2'>
              I build mobile/web apps
              <span className='inline-flex relative group/apps gap-2 sm:gap-0'>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/nigeria-creators sm:transform sm:-rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-0 sm:translate-x-2 transition-all duration-200 z-10'
                >
                  <img
                    src='/apps/nigeria-creator.png'
                    alt='Nigeria Creators'
                    className='w-10 h-10 rounded-xl cursor-pointer border border-gray-200 shadow-sm'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 sm:group-hover/nigeria-creators:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    Connect creators in Nigeria with brands
                  </span>
                </a>
                <a
                  href='https://doxahealth.ng/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/doxa sm:transform sm:rotate-3 sm:group-hover:rotate-0 sm:group-hover:translate-x-2 transition-all duration-200 z-20'
                >
                  <img
                    src='/apps/doxa.jpg'
                    alt='Doxa'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/doxa:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    Doxa -  Connect patients with top-rated doctors
                  </span>
                </a>
                <a
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/ficago sm:transform sm:-rotate-3 sm:group-hover:rotate-0 sm:group-hover:translate-x-4 sm:-translate-x-2 transition-all duration-200 z-30'
                >
                  <img
                    src='/apps/ficago.png'
                    alt='Ficago'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/ficago:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    Ficago - Helping Nigerians access home services faster.
                  </span>
                </a>
                <a
                  href='https://antro.canongs.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/antro sm:transform sm:rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-6 sm:-translate-x-4 transition-all duration-200 z-40'
                >
                  <img
                    src='/apps/antro.png'
                    alt='Antro'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/andro:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    Antro - AI-native budgeting app
                  </span>
                </a>
              </span>
              
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2'>
              <span>and create YouTube videos about building products</span>
              <a
                href='https://www.youtube.com/@CanonSamson'
                target='_blank'
                rel='noopener noreferrer'
                className='relative group sm:transform sm:rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-2 transition-all duration-200 z-10'
              >
                <img
                  src='https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_youtube-512.png'
                  alt='YouTube'
                  className='w-10 h-10 inline-block align-middle rounded-xl cursor-pointer'
                />
                <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                  @CanonSamson
                </span>
              </a>
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2 mt-10'>
              <span>I also share updates regularly on these platforms:</span>
              <span className='inline-flex relative group/socialmedia gap-2 sm:gap-0'>
                <a
                  href='https://x.com/canon__gs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/twitter sm:transform sm:-rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-0 sm:translate-x-2 transition-all duration-200 z-10'
                >
                  <img
                    src='/socials/X_logo.png'
                    alt='Twitter'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/twitter:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon_g_s
                  </span>
                </a>
                <a
                  href='https://www.instagram.com/canon.gs/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/instagram sm:transform sm:rotate-3 sm:group-hover:rotate-0 sm:group-hover:translate-x-2 transition-all duration-200 z-20'
                >
                  <img
                    src='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg'
                    alt='Instagram'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/instagram:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon.gs
                  </span>
                </a>
                <a
                  href='https://www.tiktok.com/@canon__gs'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/tiktok sm:transform sm:-rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-4 sm:-translate-x-4 transition-all duration-200 z-30'
                >
                  <img
                    src='https://thumbs.dreamstime.com/b/tiktok-social-media-app-icon-tiktok-social-media-app-icon-square-shape-vector-illustration-269930887.jpg'
                    alt='TikTok'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/tiktok:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon__gs
                  </span>
                </a>
                <a
                  href='https://www.linkedin.com/in/canon-samson/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative group/linkedin sm:transform sm:rotate-6 sm:group-hover:rotate-0 sm:group-hover:translate-x-6 sm:-translate-x-6 transition-all duration-200 z-40'
                >
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s'
                    alt='LinkedIn'
                    className='w-10 h-10 rounded-xl cursor-pointer'
                  />
                  <span className='absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white px-2.5 py-1 rounded-xl bg-opacity-80 text-xs opacity-0 group-hover/linkedin:opacity-100 transition-opacity whitespace-nowrap hidden sm:block'>
                    @canon-samson
                  </span>
                </a>
              </span>
            </span>
            <span className='inline-flex relative group items-start flex-col sm:flex-row sm:items-center gap-2 mt-8'>
              <span>
                Want to know more about my tech stack?{' '}
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
                  href='https://www.doxahealth.ng/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-purple-600 transition-colors'
                >
                  Doxa Health
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
                Just want to say hi?{' '}
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
