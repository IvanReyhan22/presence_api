![heading](https://raw.githubusercontent.com/IvanReyhan22/blob/main/images/Heading%20-%20api.png)

<h1 align="center">Presence Express + MongoDB APi</h1>
<p align="center">Absentee application to simplify the attendance checking process </p>

## Installation
1. Clone Repository
    ```
    git clone https://github.com/IvanReyhan22/presence_api.git
    ```
2. Install dependencies
    ```
    npm install
    ```
3. Run server with nodemon
    ```
    npm start
    ```

## File Structure

1. `config` - DB connection
2. `controllers` - Handles HTTP request and send response
3. `helper` - Basic function to support main function
4. `validator` - Express validator to validate incoming request
5. `middleware` - Provide necessary tool
6. `models` - data models & schemas
7. `routes` - Route incomeing HTTP request to a particular action