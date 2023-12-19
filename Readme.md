# Walkthrough with ReactJS Assignment - 3

## Logic of the program
1. Create an API URL variable
```
const API_URL = "https://api.slingacademy.com/v1/sample-data/photos";
```
2. Send a get request using `axios.get()` to get the API URL and print it to the console for the purpose of testing. "axios.get()" returns a promise object of the api
```
  async function downloadData(){
    const response = await axios.get(API_URL);
    console.log(response.data);
  }
```
3. make use of the hook `useEffect()` to perform side effects in your component. Here use it call the function `downloadData()` to display the results to the console.
```
useEffect(()=>{
        // call the function to display to the console
        downloadData();
    },[])
```

4. Now store the data from the API request in a variable(photosData) and create an array of promises which iterates through each variable and makes an `axios.get()` request to fetch all urls of the images.
```
        const photosData = response.data.photos; 
        console.log(photosData);

        const PromiseData = photosData.map((item)=> axios.get(item.url)); 
        console.log(PromiseData);
```




### Run the program in local machine
```
  cd Gallery
  npm install
  npm run dev
```


