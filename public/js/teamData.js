let team_a = "<strong>Bengal Warrior</strong>";
let team_b = "<strong>Thunder Beast</strong>";
let team_c = "<strong>Rising Knights</strong>";

const teams = {
  "THE NOBLE KNIGHTS": [
    {
      name: "Debasish Basu (<em>Captain</em>)",
      image: "public/images/t-a/debasish.png",
    },
    { name: "Rohan Chakraborty", image: "public/images/t-a/rohan.jpg" },
    { name: "Ajit", image: "public/images/t-a/ajit.jpg" },
    { name: "Arnab Chatterjee", image: "public/images/t-a/arnab.jpg" },
    { name: "Ankit Basu", image: "public/images/t-a/ankit.jpg" },
    { name: "Anirban Chanda", image: "public/images/t-a/anirban.png" },
    { name: "Deb roy", image: "public/images/t-a/deb_roy.png" },
    { name: "Diprati Das", image: "public/images/t-a/diprati.jpg" },
    { name: "Shreyash Dutta", image: "public/images/t-a/shreyash.png" },
    { name: "Dipak rao", image: "public/images/t-a/dipak.png" },
    // { name: "Prasanna Saha", image: "public/images/t-a/prasanna.jpg" },
    // ...up to 10
  ],
  "BENGAL TITANS": [
    {
      name: "Alokesh Ghosh (<em>Captain</em>)",
      image: "public/images/t-b/alokesh_sir.png",
    },
    { name: "Subhojit Deb Roy", image: "public/images/t-b/subhojit.png" },
    { name: "Shaheb mandal", image: "public/images/t-b/shaheb.png" },
    { name: "Sajib", image: "public/images/t-b/sajib.png" },
    { name: "Subrata Halder", image: "public/images/t-b/subrata.jpg" },
    { name: "Krishnendu Saha", image: "public/images/t-b/krishnendu.png" },
    { name: "Netray Goswami", image: "public/images/t-b/netray.png" },
    { name: "Arya Dey", image: "public/images/t-b/arya.jpg" },
    { name: "Boni halder", image: "public/images/t-b/boni.png" },
    { name: "Rachit Ghosh", image: "public/images/t-b/rachit.png" },
    // { name: "Raja Biswas", image: "public/images/t-b/raja.jpg" },
    // ...
  ],
  "THE GOLDEN WARRIORS": [
    {
      name: "Swarup Das (<em>Captain</em>)",
      image: "public/images/t-c/swarup.png",
    },
    { name: "Gourab Biswas", image: "public/images/t-c/gourab.png" },
    { name: "Dev kumar guha", image: "public/images/t-c/dev_kumar_guha.png" },
    { name: "Samrat Mandal", image: "public/images/t-c/samrat.jpg" },
    { name: "Subhradeep koley", image: "public/images/t-c/babin.png" },
    { name: "Somnath Laha", image: "public/images/t-c/somnath.jpg" },
    { name: "Subho das", image: "public/images/t-c/subho.png" },
    { name: "Samiran Gayen", image: "public/images/t-c/samiran.png" },
    { name: "Neil", image: "public/images/t-c/neil.png" },
    { name: "Santu Das", image: "public/images/t-c/santu.png" },
    // { name: "Nilajeet Basak", image: "public/images/t-c/nilajeet.png" },
    // ...
  ],
  "BENGAL TIGERS": [
    {
      name: "Raju Prasad (<em>Captain</em>)",
      image: "public/images/t-d/raju.jpg",
    },
    { name: "Rupanjan saha", image: "public/images/t-d/rupanjan.png" },
    { name: "Ramu", image: "public/images/t-d/ramu.png" },
    { name: "Dev Halder", image: "public/images/t-d/dev_halder.png" },
    { name: "Subhrodip Paul", image: "public/images/t-d/subhrodip.jpg" },
    { name: "Aman Jaiswal", image: "public/images/t-d/aman.png" },
    {
      name: "Chiranjib Roy Karmakar",
      image: "public/images/t-d/chiranjib.png",
    },
    { name: "Debojyoti Das", image: "public/images/t-d/debojyoti.png" },
    { name: "Suvomoy Majumder", image: "public/images/t-d/suvomoy.png" },
    { name: "Nilajeet Basak", image: "public/images/t-d/nilajeet.png" },
    // { name: "Nilajeet Basak", image: "public/images/t-c/nilajeet.png" },
    // ...
  ],
  "UNITED ELEVEN": [
    {
      name: "Subhankar roy (shadu) (<em>Captain</em>)",
      image: "public/images/t-e/subhankar.png",
    },
    { name: "Kaustav Mitra", image: "public/images/t-e/kaustav.png" },
    { name: "Subham Jaiswal", image: "public/images/t-e/subham.png" },
    { name: "Sayan Nandi", image: "public/images/t-e/sayan.png" },
    { name: "Soumyadip Das", image: "public/images/t-e/soumyadip.jpg" },
    { name: "Asim Roy", image: "public/images/t-e/asim.png" },
    { name: "Rajat chkaraborty", image: "public/images/t-e/rajat.png" },
    { name: "Tapas Das", image: "public/images/t-e/tapas.jpg" },
    { name: "Debopom", image: "public/images/t-e/debopom.png" },
    { name: "RAMESH KOIRI", image: "public/images/t-e/ramesh.png" },
    // { name: "Nilajeet Basak", image: "public/images/t-c/nilajeet.png" },
    // ...
  ],
};
