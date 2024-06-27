# Instructions to run app
### app was developed using node `20.14`
### package manager yarn `1.22.19` , npm works as well
***
## yarn install

## run app on dev by
`npx run dev`

## run app on dev by
`npx run dev`

## build production app and serve with node
`npm run build`
and
`npx serve -s dist --listen 3030`

## build and run with docker
`docker build -t app .`
and
`docker run -p 3030:3030 app`