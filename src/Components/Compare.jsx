import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const Bigrams = [
  
  "le",
  "de",
  "en",
  "re",
  "ai",
  "ou",
  "on",
  "qu",
  "nt",
  "it",
  "an",
  "ur",
  "la",
  "et",
  "te",
  "me",
  "is",
  "ne",
  "se",
  "er",
  "eu",
  "il",
];

const Custom = [
  "aadgbt a aa aa aasds sklj;s ss ss",
  "dftd dd dd ddll ll ll ll",
  "asdtf l;l; ls dj al dl",
  "as acs as asdss dss dss fdss",
  "df dcf df df ff f;f jfjf ff",
  "gg gcg gg ggasdj ;lgf",
  "sdja chl;gdjsa lg;h",
  "hh hsdah hh hh",
  "jj jjc jj jjkkkk gghkk kk",
  "gh gh gh ghjk jk jk jk",
  "l; l; l; l;sa df gj lk",
  "dj aasdfl sk as df gj kl",
  "sd jg la ;k djsa fghl",
  "sadj hgfljdassdl;gh",
  "adsjjhj ;flg sjaddssglhn js;lhg",
  "das das das das jala alala lalala"
];

const Tetragrams = [
  "into",
  "ment",
  "forf",
  "manf",
  "were",
  "more",
  "allk",
  "yout",
  "wats",
  "butr",
  "hadg",
  "wast",
  "ment",
  "come",
  "tion",
  "their"
];

const Trigrams = [
  "ing",
  "the",
  "had",
  "all",
  "our",
  "ere",
  "ous",
  "the",
  "ing",
  "ant",
  "eur",
  "for",
  "ell",
  "one",
  "who",
  "and",
  "is",
  "ion"
];

const Words = [
  "car",
  "after",
  "man",
  "all",
  "therefore",
  "then",
  "woman",
  "always",
  "you",
  "there",
  "I have",
  "never",
  "great",
  "have",
  "less",
  "is not",
  "before",
  "house",
  "things",
  "people",
  "alone",
  "maybe",
  "first",
  "only",
  "hours",
  "near",
  "note",
  "that",
  "body",
  "oneself",
  "women",
  "France",
  "small",
  "of it",
  "had"
];


const Compare = () => {
  const presentText = useSelector((store) => store.AppReducer.presentText);
  const [inputtypes, setInputtypes] = useState("");
  const [presenttchar, setPresenttchar] = useState(presentText[0]);
  const [runt, setRunt] = useState(null);
  const [all, setAll] = useState(1);
  const [gltchars, setGltchars] = useState(0);
  const [curc, setCurc] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [times, setTimes] = useState(null);
  const [allchar, setAllchar] = useState(0);
  const [gltchar, setGltchar] = useState(0);
  const [level,setLevel]= useState(1)
  const [combi,setCombi]= useState(1);
  const dpx =0;
  const dispatch = useDispatch();

  if (seconds % 300 === 0 && seconds !== 0 && times) {
    clearInterval(times);
    setSeconds(0);
    console.log("ll");
    const match = (Date.now() - runt) / 1000;
    const WPM = Math.round(allchar / 5 / (match / 60));
    const NumWPM = Math.round(
      (allchar - gltchar) / 5 / (match / 60)
    );
    const accuracy = Math.floor((NumWPM * 100) / WPM);
    dispatch({ type: "5MIN", payload: { allchar, WPM } });
  }

  
  const help1 = (e) => {
     setLevel(1);
  }
  const helpTr =  (e) => {
       setLevel(2);
   }
   const helpTt = (e) => {
      setLevel(3);
   }

   const helpw = (e) => {
      setLevel(4);
   }
   const helpc = (e) => {
      setLevel(5); 
   }

   useEffect(() => {
    console.log(level);
    handleTextChange();
  }, [level]);

   const handCombi = (e)=> {
    setCombi(e.target.value);
   }

   useEffect(() => {
    handleTextChange();
  }, [combi]);



  function runtr() {
    setAllchar(0);
    setGltchar(0);
    let id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setTimes(id);
  }

  const handleTextChange = () => {
   // console.log(plainText);
  console.log(level);
   if(level==1){
    console.log(Bigrams);
    var st="";
    var x=0;
    for (let i = 0; i < combi; i++) {
      x++;
      const randomValue = Math.floor(Math.random() * Bigrams.length);
     if(x==1){
      setPresenttchar(Bigrams[randomValue][0]);
      st+=Bigrams[randomValue];
     }else{

     st+=" "+Bigrams[randomValue];
     }
     console.log(st);
    }
    dispatch({ type: "CHANGE", payload: st });
   }
   else if(level==2){
    console.log(Trigrams);
    var st="";
    var x=0;
    for (let i = 0; i < combi; i++) {
      x++;
      const randomValue = Math.floor(Math.random() * Trigrams.length);
     if(x==1){
      setPresenttchar(Trigrams[randomValue][0]);
      st+=Trigrams[randomValue];
     }else{

     st+=" "+Trigrams[randomValue];
     }
     console.log(st);
    }
    dispatch({ type: "CHANGE", payload: st });

   }
   else if(level==3){
    console.log(Tetragrams);
    var st="";
    var x=0;
    for (let i = 0; i < combi; i++) {
      x++;
      const randomValue = Math.floor(Math.random() * Tetragrams.length);
     if(x==1){
      setPresenttchar(Tetragrams[randomValue][0]);
      st+=Tetragrams[randomValue];
     }else{

     st+=" "+Tetragrams[randomValue];
     }
     console.log(st);
    }
    dispatch({ type: "CHANGE", payload: st });
   }
   else if(level == 4){
    console.log(Words);
    var st="";
    var x=0;
    for (let i = 0; i < combi; i++) {
      x++;
      const randomValue = Math.floor(Math.random() * Words.length);
     if(x==1){
      setPresenttchar(Words[randomValue][0]);
      st+=Words[randomValue];
     }else{

     st+=" "+Words[randomValue];
     }
     console.log(st);
    }
    dispatch({ type: "CHANGE", payload: st });
   }
   else if(level==5){
    console.log(Custom);
    var st="";
    var x=0;
    for (let i = 0; i < combi; i++) {
      x++;
      const randomValue = Math.floor(Math.random() * Custom.length);
     if(x==1){
      setPresenttchar(Custom[randomValue][0]);
      st+=Custom[randomValue];
     }else{

     st+=" "+Custom[randomValue];
     }
     console.log(st);
    }
    dispatch({ type: "CHANGE", payload: st });
   }
    
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setInputtypes(value);
    if (seconds === 0 && !times) {
      let id = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setTimes(id);
    }

    let test = "";
    for (let i = 0; i < value.length; i++) {
      test = test + presentText[i];
      if (value[i] === presentText[i] && curc[i] === undefined) {
        curc[i] = true;
        setCurc({ ...curc });
      } else if (curc[i] === undefined) {
        curc[i] = false;
        setCurc({ ...curc });
      }
    }

     if (value.length > inputtypes.length) {
      setAll((pre) => pre + 1);
      setAllchar(allchar + 1);
    }

    //  word per min
    if (!runt) {
      setRunt(Date.now());
    }

    if (test !== value) {
      setGltchars(gltchars + 1);
      setGltchar(gltchar + 1);
    } else {
      if (value[value.length - 1] === presentText[value.length - 1]) {
        setPresenttchar(presentText[value.length]);
      }
    }

    if (test === value && value.length === presentText.length) {
      const match = (Date.now() - runt) / 1000;
      const WPM = Math.round(all / 5 / (match / 60));
      const NumWPM = Math.round((all - gltchars) / 5 / (match / 60));

      const accuracy = Math.floor((NumWPM * 100) / WPM);

      setInputtypes("");
      setRunt(null);
      setAll(1);
      setCurc({});
      setGltchars(0);
      dispatch({ type: "SHOW", payload: { wpm: WPM, accuracy: accuracy } });
      handleTextChange();
    }
  };

  useEffect(() => {
    handleTextChange();
  }, []);

  const minutes = Math.floor(seconds / 60);
  const secondss = seconds % 60;

  
  

  return (
    <div>
            {/* <button id="12" style={{marginRight: "2%",width:"60px", height:"60px",  background: "green",borderRadius:"50%", fontSize: "12px"}} onClick={help}>Bigrams</button>
            <button style={{marginRight: "2%",width:"60px", height:"60px",  background: "blue",borderRadius:"50%", fontSize: "12px"}}>Trigrams</button>
            <button style={{marginRight: "2%",width:"60px", height:"60px",  background: "blue",borderRadius:"50%", fontSize: "10px"}}>Tetragrams</button>
            <button style={{marginRight: "2%",width:"60px", height:"60px",  background: "blue", borderRadius:"50%", fontSize: "12px"}}>Words</button> */}
              <div className="form-group">
                  <div class="rtx">
                    <label class="col-form-label col-form-label-sm"> &nbsp; </label>
                    <div class="custom-control custom-radio">
                        <input
                            type="radio"
                            class="custom-control-input"
                            id="bi-grams"
                            name="source-radio-group"
                            value="bigrams"
                            v-model="data.source"
                            onClick={help1}
                       />
                        <label class="custom-control-label" for="bi-grams" >Bigrams</label>
                        </div>
                        <div class="custom-control custom-radio">
                        <input
                            type="radio"
                            class="custom-control-input"
                            id="tri-grams"
                            name="source-radio-group"
                            value="trigrams"
                            v-model="data.source"
                            onClick={helpTr}
                        />
                        <label class="custom-control-label" for="tri-grams"  >Trigrams</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input
                            type="radio"
                            class="custom-control-input"
                            id="tetra-grams"
                            name="source-radio-group"
                            value="tetragrams"
                            v-model="data.source"
                            onClick={helpTt}
                        />
                        <label class="custom-control-label" for="tetra-grams"  >Tetragrams</label>
                        </div>
                        <div class="custom-control custom-radio">
                        <input
                            type="radio"
                            class="custom-control-input"
                            id="words"
                            name="source-radio-group"
                            value="words"
                            v-model="data.source"
                            onClick={helpw}
                        />
                        <label class="custom-control-label" for="words">Words</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input
                            type="radio"
                            class="custom-control-input"
                            id="custom_words"
                            name="source-radio-group"
                            value="custom_words"
                            v-model="data.source"
                            onClick={helpc}
                        />
                        <label class="custom-control-label" for="custom_words" >
                        <a
                            href="#"
                            data-toggle="modal"
                            data-target="#custom-words-modal"
                           // click="customWordsModalShow"
                        >
                            Custom
                        </a>
                        </label>
                    </div>
                    </div>
                    <div className="inrtx">
                    <label class="col-form-label col-form-label-sm">Combination</label> 
                  <input type="number" min="1" class="form-control form-control-sm" onChange={handCombi}></input>
                   </div>
              </div>
             


      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        gap={"20px"}
        marginTop={"10px"}
        marginBottom={"20px"}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "30px" }}>Enter Key -</Typography>
          <Button
            variant="outlined"
            
            sx={{
              width: 120,
              color: "white",
              marginLeft: "20px",
              backgroundColor: "teal",
              fontSize:'25px',
              height:40
            }}
          >
            {presenttchar === " " ? "Space" : presenttchar}
          </Button>
        </Box>
        <Box
          sx={{
            fontSize: "20px",
          }}
        >
          Minutes: {minutes} Seconds: {secondss}
          {seconds === 0 && (
            <Button
              variant="outlined"
              sx={{
                marginLeft: "10px",
                color: "white",
                backgroundColor: "teal",
              }}
              onClick={runtr}
            >
              Start
            </Button>
          )}
        </Box>
      </Box>
      <TextField
        placeholder="Typing here ..."
        sx={{
          width: { sm: 100, md: 500 },
          marginTop: "12px",
          "& .MuiInputBase-root": {
            height: 70,
            borderRadius: "10px",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          },
        }}
        inputProps={{ style: { fontSize: 30 } }}
        value={inputtypes}
        onChange={handleInput}
      />
    </div>
  );
};

export default Compare;
