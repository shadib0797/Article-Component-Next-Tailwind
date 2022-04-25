import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Article Preview Component</title>
        <meta name="description" content="Article preview component challenge by Frontend Mentor" />
        <link rel="icon" href="./images/favicon-32x32.png" />
      </Head>

      <main className="p-6 pt-20 md:min-h-screen md:flex md:items-center md:p-6 ">
      <div className="bg-white rounded-lg overflow-hidden max-w-[23rem] mx-auto lg:w-3/5 lg:max-w-3xl lg:flex ">
          <img className="object-cover w-full h-48 lg:h-auto lg:w-2/5" src="/images/drawers.jpg" alt="Drawers image" />
        <div>
          <article className="p-8">
            <h1 className="font-bold text-base text-grayish-blue-vd tracking-wide ">Shift the overall look and feel by adding these wonderful
          touches to furniture in your home</h1>
            <p className="text-sm font-medium text-desaturated-dark-blue mt-4">Ever been in a room and felt like something was missing? Perhaps
          it felt slightly bare and uninviting. I’ve got some simple tips
          to help you make any room feel complete.</p>
          </article>
          <div className="px-8 pt-0 pb-6 flex justify-between items-center">
            <div className="flex items-center">
              <img className="rounded-full w-10 mr-4 " src="/images/avatar-michelle.jpg" alt="avatar-michelle" />
              <div>
                <p className="font-bold text-sm text-grayish-blue-vd tracking-wide">Michelle Appleton</p>
                <p className="font-medium text-grayish-blue text-sm">28 Jun 2020</p>
              </div>
            </div>
            <div className="relative group w-8 h-8 rounded-full bg-grayish-blue-l flex items-center justify-center hover:bg-grayish-blue hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path className="group-hover:fill-white" fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
              {/* <div className="bg-[#48556a] px-8 py-4 absolute bottom-16 flex justify-around">
                <p>SHARE</p>
                <a href="#"><img src="images/icon-facebook.svg" alt="Facebook icon" /></a>
                <a href="#"><img src="images/icon-twitter.svg" alt="Twitter icon" /></a>
                <a href="#"><img src="images/icon-pinterest.svg" alt="Pinterest icon" /></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}
