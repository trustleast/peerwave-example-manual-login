## peerwave-example-manual-login

An unstyled, basic React application that uses Peerwave's API to log a user in.
Logins normally happen via chat requests, but if for some reason you need a user to be logged in, you can force it to happen via this mechanism.
The guts of the code are visible in the [src/components/ManualLogin.tsx](src/components/ManualLogin.tsx) file.
This component can be copied and used elsewhere.

Documentation for Peerwave's API can be found [here](https://www.peerwave.ai/docs).

## Deploy

You can build the app for static distribution via `npm run build`

The built application will be available in the `dist/` folder.

## Test

You can test the app locally via `npm run dev`

You can look for style issues by running `npm run lint`
