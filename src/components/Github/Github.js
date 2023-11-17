import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState({});
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/chaturvedi-anil')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setData(data);
  //   })
  // },[]);
  return (
    <div className='bg-gray-600 text-center text-3xl p-10 text-white'>
      Github Followes : {data.followers} <br />

      Github Following : {data.following}
      <img src={data.avatar_url} alt="github_avtar" width="300px" />
    </div>
  )
}

const githubDataLoader=async()=>{
  const response = await fetch('https://api.github.com/users/chaturvedi-anil');
  return response.json();
}

export {Github, githubDataLoader};
