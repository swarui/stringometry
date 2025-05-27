import Navbar from '@/components/Navbar'
import Image from "next/image";


function Page(){
  return (<>
  <Navbar/>
  <h1>Mtaaaa</h1>
  <div className="relative w-full h-[700px]">
  <Image
    src="/images/home.webp"
    alt="Hero"
    fill
    className="object-cover"
  />
</div>

  </>)
}
export default Page