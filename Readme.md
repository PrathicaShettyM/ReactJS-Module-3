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


### Run the program in local machine
```
  cd Gallery
  npm install
  npm run dev
```


