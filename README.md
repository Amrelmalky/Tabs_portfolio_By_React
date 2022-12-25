#### IN ACTION

https://amrelmalky.github.io/Tabs_portfolio_By_React/

![image](https://user-images.githubusercontent.com/69693889/209480857-609b8397-e6fe-4150-bce7-a078d6d2a57e.png)




[Portfolio](https://gatsby-strapi-portfolio-project.netlify.app/)


Tabs portfolio
[1] we have url with array of objs , so we need to fetch data to our App .
( useState it is the way to store data)

[2] In order to fetch that data , we have to create function of fetch data ,
Then store that data in variable to use it later.
- after fetch data we set rcvd data in variable to use it later
- after fetch data we set loading state to be false
- ( useEffect to handle and invoke fetch function)

[3]- Setup loading message ..
( setup loading state with boolean value true)

[4] If condition for loading:
if ( loading = true ) Display msg Loading…

[5] After fetch data , and after we insure that data fetched successfully in console log , We need to display 1st item of fetch data which array So we need to display data[0] how ?

[6] destructure properties we need from obj remmber rcvd data array of objects data[value]
{ properties we need from obj } = data [value]
We create value state with initial value 0 Because data is array with zero index

[7] creating jobs section
we have 2 parties
Buttons && job desc

Buttons
————-
Iterated over data by map(item , index)
{item.company} onClick={()=>{ setValue(index)} className ={ job-btn ${ index=== value && 'active-btn' } } >
setvalue will change value to be equal index so change display data
adding default class job-btn active class if index of that button === value of that button so
adding active class
Job desc

—————
Title
Company
Dates
Duties-> array so will irritated over it using map using index and setValue to change value index
