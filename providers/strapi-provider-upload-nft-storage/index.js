'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _nft = require("nft.storage");

/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'nft-storage',
  name: 'Strapi NFT Storage',
  init: (config) => { 
    
    const client = new _nft.NFTStorage({
      token: config.apiKey
    });

    return {
      upload: async (file) => {
        
        const ipfs = await client.storeBlob(new _nft.Blob([file.buffer]));
        const status = await client.status(ipfs)
        
        file.cid = ipfs;
        file.url = `https://${ipfs}.ipfs.dweb.link/`
        
        return Promise.resolve();

      },
      delete: async (file) => {

        if (file.formats){
          const thumbnail = file.formats.thumbnail.cid;
          const large = file.formats.large.cid;
          const medium = file.formats.medium.cid;
          const small = file.formats.small.cid;
          
          // remove
          await client.delete(thumbnail)
          await client.delete(large)
          await client.delete(medium)
          await client.delete(small)
        }

        return Promise.resolve()
      }
    };
  }
};