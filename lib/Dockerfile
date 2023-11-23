FROM quay.io/suhailtechinfo/suhail
RUN git clone https://github.com/khaherinc/ELLIE-V2 /root/ELLIE-V2
WORKDIR /root/ELLIE-V2/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
