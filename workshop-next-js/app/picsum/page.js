import Image from "next/image";
import { Link } from "react-router-dom";

const url = 'https://picsum.photos/v2/list';

const fetchPictures = async () => {
    const response = await fetch(url);

    if(!responce.ok){
    throw new Error('Failed to fetch pictures');
    };


    const data = await response.json();
    console.log(data);
    return data;
};


const PicsumPage = async() => {
    const pictures = await fetchPictures();

    return (
        <>
          <h1>Picsum Pictures</h1>

          <ul> 
            {pictures.map((picture) => {
              return (
            
                <li key={picture.id}>
                   <Link href={`/picsum/${picture.id}`}> 
                  <Image width={500} height={300} src={picture.download_url}/>
                </Link></li>
              );
            })}
          </ul>
        </>
      );
};
[]
      
export default PicsumPage;