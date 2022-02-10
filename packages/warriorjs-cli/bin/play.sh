cd ../warriorjs-tower-beginner
npm run build && npm pack
cd ../warriorjs-cli
npm install ../warriorjs-tower-beginner/warriorjs-tower-beginner-0.13.0.tgz
npm run start