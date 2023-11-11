FROM quay.io/suhailtechinfo/suhail
RUN git clone https://github.com/khaherinc/ELLIE-V2 /root/ellie
WORKDIR /root/ellie/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
