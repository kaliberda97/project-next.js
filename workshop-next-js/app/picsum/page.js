
const url = 'https://picsum.photos/v2/list';

const fetchPictures = async () => {
    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    return data;
};




const PicsumPage = () => {
  return (<div>PicsumPage</div>
  )
}

export default PicsumPage