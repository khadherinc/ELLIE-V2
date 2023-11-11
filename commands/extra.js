/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : ELLIE V2 by KHADHERINC
 * @author : KHADHERINC <https://github.com/khadherinc>
 * @description : ELLIE V2,A Multi-functional whatsapp bot.
 * @version 1.0.0
 **/


const {cmd} = require('../lib')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
cmd({
        pattern: "pastebin",
        desc: "To check ping",
        category: "extra",
        filename: __filename,
    },
    async(Void, citel) => {
        if(!citel.quoted) return citel.reply('Please quote any text to get link.')
        let data = await pastebin.createPaste(citel.quoted.text, "ellie-Pastebin")
        citel.reply('_Here is your link._\n'+data)
    }
);
