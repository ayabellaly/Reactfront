import { loadGetInitialProps } from 'next/dist/shared/lib/utils';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import bgImg from '../public/izt.jpg'
import bg from '../public/IZT.png'
// import po from '../public/po.jpg'
import com from '../public/car.jpeg'
import pe from '../public/per.jpeg'
import societe from '../public/societe.jpeg'

import tr from '../public/road1.jpeg'
import cont from '../public/cont.png'
import inst from '../public/inst.png'
import fab from '../public/fab.png'
import { truncate } from 'fs';










export default function Home() {
  return (
    

    
    

  
  

    <div id="container" className="flex flex-col">
    <div id="header" className="p-4 bg-neutral-900 flex">


    <div className='bg-[url("https://img.freepik.com/free-photo/handsome-bearded-smiling-top-manager-black-suit-working-his-laptop-backseat-car_496169-590.jpg?w=1380&t=st=1660231813~exp=1660232413~hmac=dad8d7f94d39999a5ed64bb6a07f736e6c73854afee3b7e6d9484307e71a356c")] w-full bg-cover bg-center lg:pb-24 pt-0 '>
    <div className="flex items-center justify-center sm:bg-fixed ">
        <Image
          src={bg}
         className="mr-3 h-6 sm:h-9"
         width={100}
         height={100}
         alt='img'
        />
       
      
      
    </div>
    <nav className=" flex-1 mx-auto mb-4 bg-neutral-400 h-12 rounded-lg opacity-50 nav-width "  >
 
 <div className="py-3  mx-auto max-w-screen-xl md:top-6">

   <div className="  text-center space-x-4 z-20">
  
       
         <a
           href="#"
           className="text-yellow-400 dark:text-white hover:text-white"
           aria-current="page"
         >
           Acceuil
         </a>
      
       
         <a
           href="#"
           className="text-yellow-500 dark:text-white hover:text-white"
         >
           Service
         </a>
       
       
         <a
           href="#"
           className="text-yellow-500 dark:text-white hover:text-white"
         >
           à Propos

         </a>
      
       
         <a
           href="#"
           className="text-yellow-500 dark:text-white hover:text-white"
         >
           Contact
         </a>
      
     
   </div>

 </div>
</nav>
<h2 className='text-white py-4 sm:text-left lg:text-3xl text-center font-light lg:text-center'>Trouvons ensemble </h2>
<h1 className='text-white sm:text-left text-4xl  text-center lg:text-6xl  lg:text-center'>La voiture idéale <a className="text-yellow-500">...</a></h1>

<div className=" bg-neutral-400 flex-grow ">
    <div className="lg:ml-86 flex-row mt-8 bg-gray place-content-center sm:flex-col place-content-center flex ">

    
    <form className="">
        <div className="lg:flex lg:items-center lg:px-12 lg:min-w-full lg:absolute lg:bg-gray-500 sm:justify-items-center inline-block">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0 lg:w-1/6">
            <label
              className="uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="location"
            >
           Personne
            </label>
            <div>
              <select
                className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="location"
              >
                <option>4 Personnes</option>
                <option>10 Personnes</option>
                <option>+20 Personnes</option>
              </select>
            </div>
          </div>
          <div className="md:w-1/2 px-3 lg:w-1/6">
            <label
              className="uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="job-type"
            >
          Bagage
            </label>
            <div>
              <select
                className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="job-type"
              >
                <option>1KG</option>
                <option>2KG</option>
                <option>3KG</option>
              </select>
            </div>
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
              htmlFor="department"
            >
              Emplacement de Depart
            </label>
            <div>
              <select
                className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="department"
              >
                <option>Salé</option>
                <option>Casablanca</option>
                <option>Marrakech</option>
              </select>

            </div>
           
          </div>
          <div className="md:w-1/2 px-3">
            <label
              className="uppercase tracking-wide text-white text-xs font-bold mb-2 "
              htmlFor="department"
            >
              Destination
            </label>
            <div>
              <select
                className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                id="department"
              >
                <option>Marrakech</option>
                <option>Casablanca</option>
                <option>Agadir</option>
              </select>

            </div>
           
          </div>
          <div className="md:w-full px-3">
          <button className=" hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded shadow">
    Chercher
</button>
          
        </div>
        </div>
       
         
    </form>



 
</div>
  </div>       
      

</div>

</div>


<div className="lg:grid lg:grid-cols-6 gap-4 bg-black sm: p-6">
  
  <div className="col-span-4 grid place-items-center"> 
  <h2 className='text-white text-3xl font-bold text-center'>Faites confiance <a className="text-yellow-500">à nous</a> .</h2>
  <p className="text-white text-left">Avec plus de <a className="text-yellow-500">120 vehicules</a>differents .nous sommes surs d'avoir un Trajets adaptés à vos besoins. Nous vous emmenons ou vous voulez et dans le type de véhicule qui vous convient le mieux   </p>
      <button className=" hover:bg-gray-100 font-semibold bg-yellow-600 text-white py-2 px-8 rounded shadow">
    Reserver
</button>
</div>
  
  <div className="lg:bg-black lg:grid lg:grid-cols-2 flex justify-around">
        <div className='text-white'>
          <h1>6 ans</h1>
          <Image
                  src={com}
                className=" h-6 sm:h-9 rounded-full"
                width={30}
                height={30}
                alt='img'
                />
            <p>Existance</p>
        </div>
        <div className='text-white'>

        <h1>+2160</h1>
        <Image
                src={tr}
              className=" h-6 sm:h-9 rounded-full"
              width={30}
              height={30}
              alt='img'
              />

              <p>Trajets</p>

        </div>

    <div className='text-white'>
    <h1>+19</h1>

    <Image
            src={pe}
          className=" h-6 sm:h-9 rounded-full"
          width={30}
          height={30}
          alt='img'
          />
          <p>Particulier</p>
    </div>

    <div className=' text-white'>
    <h1>+3460</h1>

    <Image
            src={societe}
          className=" h-6 sm:h-9 rounded-full"
          width={30}
          height={30}
          alt='img'
          />
          <p>Sociète</p>
    </div>

    </div>

  
  
</div>    
  <div className="flex flex-wrap bg-gray-500 opacity-50 grid grid-cols-3 gap-4 bg-gray">
  <div className="p-16 px-8 grid place-items-center col-span-2">
  <h2 className=' text-yellow-500 text-3xl font-bold text-center '> Notre staff </h2>



    <div className="text-white text-justify mb-8">
<ul>
  <li>Des chauffeurs professionnelles hautement formés</li>
  <li>la sécurité comme notre priorité la plus élevé</li>
  <li> Amélioration continue</li>
  <li> Service client du premier tarif</li>
  <li></li>
  <li></li>

</ul>   
      
     
     
     

      <br />
      <br />
     
      
     
    </div>
    <button className="hover:bg-gray-100  font-semibold bg-yellow-600 text-white py-2 px-8 rounded shadow grid place-items-center">
  Reserver
</button>
  </div>
  <div className="slick">
    slick
  </div>
 
</div>
    
    {/* <div id="default-carousel" className="relative" data-carousel="static">
   
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
     
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
        <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
          First Slide
        </span>
        <Image
          src={cont}
         width={300}
         height={300}
         alt='img'
        />
      </div>
     
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <Image
          src={cont}
         width={300}
         height={300}
         alt='img'
        />
      </div>
      
      <div className="hidden duration-700 ease-in-out" data-carousel-item="">
      <Image
          src={cont}
         width={300}
         height={300}
         alt='img'
        />
      </div>
    </div>
    
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button
        type="button"
        className="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 1"
        data-carousel-slide-to={0}
      />
      <button
        type="button"
        className="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to={1}
      />
      <button
        type="button"
        className="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to={2}
      />
    </div>
    
    <button
      type="button"
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev=""
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next=""
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="sr-only">Next</span>
      </span>
    </button>
  </div> */}

   
    
        

    

    <div id="footer" className="p-4 bg-black">
<div className='lg:flex-row  place-content-center sm:flex-col space-x-20 place-content-center flex h-20'>
<div >
        <Image
          src={cont}
         width={30}
         height={30}
         alt='img'
        />
        </div>

        <div >
        <Image
          src={fab}
         className="ml-20 "
         width={30}
         height={30}
         alt='img'
        />
        </div>

        <div >
        <Image
          src={inst}
         className="ml-20 "
         width={30}
         height={30}
         alt='img'
        />
        </div>


    </div>
</div>

</div>


 
);
}
  
