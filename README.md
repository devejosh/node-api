
# Node-Spotify API

Playing around with the Spotify API. This applicaiton is to set up a framework for Authenticating with the Spotify API and accessing endpoints. 




## Documentation

You can find the Spotify  API documentation [here](https://developer.spotify.com/documentation/web-api).




## Requirements for running the application

To run this application, you will need to add a .env file to the root folder and add the following information in it. 

- `SPOTIFY_CLIENT_ID=<YOUR SPOTIFY_CLIENT_ID>`
- `SPOTIFY_CLIENT_SECRET=<YOUR SPOTIFY_CLIENT_SECRET>`
- `SPOTIFY_REDIRECT_URI=http://localhost:3000/callback`
- `JWT_SECRET=<YOUR_JWT_SECRET_KEY>`

## Addressing some basic questions about the application and how to run it,

#### 1. What is Spotify client ID, Client secret and the redirect URI? Where do you get this information. 

## FAQ

### 1. What is Spotify Client ID, Client Secret, and Redirect URI? Where do you get this information?

**Spotify Client ID** and **Client Secret** are unique credentials provided by Spotify to authenticate your application. The **Redirect URI** is a URL that Spotify will redirect to after the user has authenticated your application.

- **Client ID**: This is a unique identifier for your Spotify app. It is used by Spotify to identify your application.
- **Client Secret**: This is a confidential string that should not be shared. It is used in conjunction with the Client ID to authenticate your application with Spotify's servers.
- **Redirect URI**: This is the URL to which Spotify will send the user after they have authorized your application. It must match one of the redirect URIs you have registered in your Spotify Developer Dashboard.

To get these credentials, follow these steps:

1. **Log in to the Spotify Developer Dashboard**:
   - Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
   - Log in with your Spotify account. If you don't have an account, you'll need to create one.

2. **Create a new application**:
   - Click on "Create an App".
   - Fill out the required fields such as the application name, description, and any other necessary information.
   - Agree to the terms and conditions, then click "Create".

3. **Retrieve your credentials**:
   - After creating the app, you will be directed to the app's dashboard.
   - Here, you will find your **Client ID** and **Client Secret**.

4. **Set up your Redirect URI**:
   - In the app dashboard, navigate to the "Edit Settings" button.
   - Under "Redirect URIs", add the URL where you want Spotify to redirect users after authentication (e.g., `http://localhost:3000/callback` for the app because I have designed the app to run locally on port 3000).
   - Click "Add" and then "Save".

Ensure you keep your **Client Secret** secure and never expose it in client-side code or public repositories. Use environment variables or a secure vault to manage these credentials in your application.


## 2. What is JWT Secret and where do I get that from?

### JWT Secret Key Generation and Usage

The `JWT_SECRET` is a secret key used for signing and verifying JSON Web Tokens (JWTs). This key should be kept secure and not shared publicly. It can be any random string of characters. Below are various methods to generate a secret key and how to use it in your application.

### Methods to Generate a Secret Key

#### Method 1: Manually Create a Secret Key
You can manually create a strong secret key using an online password generator to create a long, random string.

Example:JWT_SECRET=your_randomly_generated_secret_key that you got from your password generator

#### Method 2: Using a Command Line Tool
You can use command-line tools like `openssl` to generate a random string. Here's an example command:

```bash
openssl rand -base64 32
```

### Storing the JWT_SECRET

Once you have your secret key, store it in your .env file:


