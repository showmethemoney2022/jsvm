var table2 = "00000000 C0BA6CAC 5A05DF1B 9ABFB3B7 B40BBE36 74B1D29A EE0E612D 2EB40D81 B3667A2F 73DC1683 E963A534 29D9C998 076DC419 C7D7A8B5 5D681B02 9DD277AE BDBDF21D 7D079EB1 E7B82D06 270241AA 09B64C2B C90C2087 53B39330 9309FF9C 0EDB8832 CE61E49E 54DE5729 94643B85 BAD03604 7A6A5AA8 E0D5E91F 206F85B3 A00AE279 60B08ED5 FA0F3D62 3AB551CE 14015C4F D4BB30E3 4E048354 8EBEEFF8 136C9856 D3D6F4FA 4969474D 89D32BE1 A7672660 67DD4ACC FD62F97B 3DD895D7 1DB71064 DD0D7CC8 47B2CF7F 8708A3D3 A9BCAE52 6906C2FE F3B97149 33031DE5 AED16A4B 6E6B06E7 F4D4B550 346ED9FC 1ADAD47D DA60B8D1 40DF0B66 806567CA 9B64C2B1 5BDEAE1D C1611DAA 01DB7106 2F6F7C87 EFD5102B 756AA39C B5D0CF30 2802B89E E8B8D432 72076785 B2BD0B29 9C0906A8 5CB36A04 C60CD9B3 06B6B51F 26D930AC E6635C00 7CDCEFB7 BC66831B 92D28E9A 5268E236 C8D75181 086D3D2D 95BF4A83 5505262F CFBA9598 0F00F934 21B4F4B5 E10E9819 7BB12BAE BB0B4702 3B6E20C8 FBD44C64 616BFFD3 A1D1937F 8F659EFE 4FDFF252 D56041E5 15DA2D49 88085AE7 48B2364B D20D85FC 12B7E950 3C03E4D1 FCB9887D 66063BCA A6BC5766 86D3D2D5 4669BE79 DCD60DCE 1C6C6162 32D86CE3 F262004F 68DDB3F8 A867DF54 35B5A8FA F50FC456 6FB077E1 AF0A1B4D 81BE16CC 41047A60 DBBBC9D7 1B01A57B EDB88321 2D02EF8D B7BD5C3A 77073096 59B33D17 990951BB 03B6E20C C30C8EA0 5EDEF90E 9E6495A2 04DB2615 C4614AB9 EAD54738 2A6F2B94 B0D09823 706AF48F 5005713C 90BF1D90 0A00AE27 CABAC28B E40ECF0A 24B4A3A6 BE0B1011 7EB17CBD E3630B13 23D967BF B966D408 79DCB8A4 5768B525 97D2D989 0D6D6A3E CDD70692 4DB26158 8D080DF4 17B7BE43 D70DD2EF F9B9DF6E 3903B3C2 A3BC0075 63066CD9 FED41B77 3E6E77DB A4D1C46C 646BA8C0 4ADFA541 8A65C9ED 10DA7A5A D06016F6 F00F9345 30B5FFE9 AA0A4C5E 6AB020F2 44042D73 84BE41DF 1E01F268 DEBB9EC4 4369E96A 83D385C6 196C3671 D9D65ADD F762575C 37D83BF0 AD678847 6DDDE4EB 76DC4190 B6662D3C 2CD99E8B EC63F227 C2D7FFA6 026D930A 98D220BD 58684C11 C5BA3BBF 05005713 9FBFE4A4 5F058808 71B18589 B10BE925 2BB45A92 EB0E363E CB61B38D 0BDBDF21 91646C96 51DE003A 7F6A0DBB BFD06117 256FD2A0 E5D5BE0C 7807C9A2 B8BDA50E 220216B9 E2B87A15 CC0C7794 0CB61B38 9609A88F 56B3C423 D6D6A3E9 166CCF45 8CD37CF2 4C69105E 62DD1DDF A2677173 38D8C2C4 F862AE68 65B0D9C6 A50AB56A 3FB506DD FF0F6A71 D1BB67F0 11010B5C 8BBEB8EB 4B04D447 6B6B51F4 ABD13D58 316E8EEF F1D4E243 DF60EFC2 1FDA836E 856530D9 45DF5C75 D80D2BDB 18B74777 8208F4C0 42B2986C 6C0695ED ACBCF941 36034AF6 F6B9265A"



function crc32(str ) {  

    var crc1 = 0;  
    var n = 0; //a number between 0 and 255  
    var x = 0; //an hex number  
    crc1 = crc1 ^ (-1);  
    var iTop = str.length
    for( var i = 0; i < iTop; i++ ) {  
        n = ( crc1 ^ str.charCodeAt( i ) ) & 0xFF;  
        x = "0x" + table2.substr( n * 9, 8 );  
        crc1 = ( crc1 >>> 8 ) ^ x;  
    }  
    return (crc1 ^ (-1)) >>> 0;  
};  

var str = crc32('mario')
str = str.toString(10)
console.log(str)
