
const getMemeData  = async () =>{
    const jockBox =  document.querySelector('#app');
try{
  const res =  await fetch('https://api.chucknorris.io/jokes/random')
 const data = await res.json(); 
 console.log(data);
 jockBox.innerHTML= ` 
 <div class="memeBox"> 
 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="80px" height="80px"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2.56,2.56)"><path d="M59.02539,16.58398c-2.06828,-0.00184 -4.19468,0.01265 -6.31055,0.04492c-8.46347,0.12909 -16.40345,0.44146 -20.21875,1.43555c-6.20047,1.61555 -13.96829,2.62093 -18.05273,7.67969c-1.97228,2.44275 -2.02256,4.87554 -2.07031,6.13086c-0.02388,0.62766 -0.07022,0.92954 -0.20508,1.20898c-0.13486,0.27944 -0.40979,0.66923 -1.2832,1.25586c-2.55172,1.71385 -4.27946,4.29955 -4.76758,7.26758c-0.48812,2.96803 0.23914,6.24232 2.17383,9.42969c1.37732,2.26911 2.01433,6.29188 2.10938,10.83594c0.09505,4.54405 -0.26945,9.58134 -0.40039,14.06836c-0.07026,2.40768 0.22303,4.32082 0.95508,5.89258c0.73205,1.57176 1.93894,2.70841 3.23438,3.42578c2.59087,1.43475 5.4093,1.64505 8.13477,2.62305c2.18575,0.78433 4.95638,0.69812 8.46094,0.33008c3.50455,-0.36805 7.6327,-1.13569 11.91211,-2.20312c8.55882,-2.13487 17.65697,-5.39903 23.43359,-9.35937c5.30157,-3.63466 8.10564,-5.05111 10.06836,-5.98242c1.96272,-0.93131 3.39803,-1.53243 5.17578,-3.21484c0,-0.00065 0,-0.0013 0,-0.00195c0.82154,-0.7788 1.31696,-1.80307 1.47852,-2.65039c0.16156,-0.84732 0.12121,-1.45626 0.16797,-1.98437c0.09352,-1.05624 0.24938,-2.10842 2.43945,-4.45117c2.29315,-2.453 4.72104,-4.3615 6.55469,-6.57617c1.83365,-2.21467 2.98574,-5.20395 1.87695,-8.4375c-1.08487,-3.1638 -3.50149,-5.99093 -5.62109,-8.1875c-1.77624,-1.84074 -2.88865,-2.72357 -3.36719,-3.11914c-0.07855,-0.9988 -0.31761,-3.42377 -1.39062,-6.45898c-0.66231,-1.87346 -1.61714,-3.8359 -3.11523,-5.4668c-1.4981,-1.6309 -3.62606,-2.90202 -6.23633,-3.11328c-3.25564,-0.2635 -8.93189,-0.41635 -15.13672,-0.42187zM59.03516,20.58594c0.3646,0.00053 0.68833,0.00822 1.04883,0.00977l-0.97852,1.95703c-0.15987,0.31959 -0.13706,0.7002 0.05981,0.99842c0.19688,0.29822 0.53791,0.46874 0.89462,0.44731c0.3567,-0.02143 0.67487,-0.23155 0.83463,-0.5512l1.41406,-2.83008c4.80911,0.04984 9.08369,0.17901 11.5293,0.37695c1.55973,0.12624 2.642,0.77465 3.61328,1.83203c0.97128,1.05738 1.74583,2.55159 2.29102,4.09375c0.00927,0.02623 0.01625,0.0519 0.02539,0.07813l-2.21484,1.10742c-0.31965,0.15976 -0.52977,0.47792 -0.5512,0.83463c-0.02143,0.3567 0.14909,0.69774 0.44731,0.89462c0.29822,0.19688 0.67883,0.21968 0.99842,0.05981l1.88867,-0.94531c0.25114,1.0285 0.39959,1.90386 0.49805,2.63086l-5.10937,1.45898c-0.35351,0.08957 -0.63025,0.36447 -0.72217,0.71738c-0.09192,0.35291 0.01554,0.72788 0.28043,0.97853c0.26489,0.25065 0.64523,0.33724 0.99252,0.22597l4.81445,-1.375c0.1166,0.38253 0.34519,0.72133 0.65625,0.97266c0,0 1.71108,1.37713 3.64648,3.38281c1.9354,2.00568 4.01972,4.67984 4.71484,6.70703c0.67121,1.95745 0.23252,2.89126 -1.17383,4.58984c-1.40635,1.69858 -3.86768,3.69349 -6.39453,6.39648c-2.62992,2.81325 -3.35797,5.20381 -3.50195,6.83008c-0.07199,0.81313 -0.0689,1.35514 -0.11328,1.58789c-0.04425,0.23207 -0.0081,0.21843 -0.29883,0.49414c-1.39225,1.31758 -2.08334,1.53163 -4.14062,2.50781c-2.05728,0.97619 -5.1668,2.55958 -10.61523,6.29492c-4.83312,3.3135 -13.38095,6.52261 -21.4375,8.5918l0.54883,-2.74609c0.06377,-0.29836 -0.01213,-0.60952 -0.20614,-0.84499c-0.19401,-0.23547 -0.4849,-0.36951 -0.78995,-0.36399c-0.47522,0.00886 -0.87855,0.35096 -0.96484,0.81836l-0.73242,3.66016c-1.56906,0.36823 -3.11551,0.70636 -4.58789,0.97852l1.22852,-3.07227c0.13031,-0.31406 0.09212,-0.67282 -0.10139,-0.95241c-0.1935,-0.27959 -0.51581,-0.44172 -0.85564,-0.4304c-0.40085,0.01406 -0.75452,0.26624 -0.89844,0.64063l-1.67969,4.20117c-1.05618,0.16363 -2.07846,0.30485 -3.02539,0.4043c-0.27354,0.02873 -0.51134,0.03491 -0.77539,0.05664l2.26563,-3.77734c0.1881,-0.30446 0.19917,-0.68622 0.02905,-1.00107c-0.17012,-0.31485 -0.49552,-0.5148 -0.85327,-0.52432c-0.36561,-0.00932 -0.70715,0.18167 -0.89062,0.49805l-2.95117,4.91992c-0.95994,0.00853 -1.80482,-0.01777 -2.42969,-0.08789l2.03906,-2.71875c0.23022,-0.29785 0.27368,-0.69975 0.11245,-1.03993c-0.16122,-0.34018 -0.49982,-0.56101 -0.87612,-0.5714c-0.33022,-0.00945 -0.6438,0.14478 -0.83789,0.41211l-2.54492,3.39258c-0.82576,-0.26474 -1.60291,-0.49935 -2.33789,-0.69531l0.39063,-0.39062c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-1.19336,1.19336c-0.60727,-0.17507 -1.16935,-0.35642 -1.61328,-0.55859l1.2207,-1.2207c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-1.40234,1.40234c-0.10951,-0.16153 -0.21203,-0.34151 -0.30859,-0.54883c-0.37095,-0.79646 -0.64077,-2.07507 -0.58203,-4.08789c0.03087,-1.05766 0.08901,-2.2518 0.13867,-3.38281l2.17773,-0.72656c0.46467,-0.14697 0.75573,-0.60748 0.68911,-1.09026c-0.06662,-0.48278 -0.47154,-0.84724 -0.95864,-0.86287c-0.12343,-0.00436 -0.2466,0.01418 -0.36328,0.05469l-1.45703,0.48633c0.1264,-2.88712 0.2346,-5.8425 0.17383,-8.74805c-0.05338,-2.55218 -0.22716,-5.02514 -0.68164,-7.30664l1.59766,-0.5332c0.46467,-0.14697 0.75573,-0.60748 0.68911,-1.09026c-0.06662,-0.48278 -0.47154,-0.84724 -0.95864,-0.86287c-0.12343,-0.00436 -0.2466,0.01418 -0.36328,0.05469l-1.44922,0.48242c-0.15848,-0.5331 -0.33966,-1.05027 -0.54297,-1.55273l2.9082,-2.17969c0.34831,-0.25354 0.49512,-0.70165 0.36434,-1.11214c-0.13077,-0.41049 -0.50973,-0.69111 -0.94051,-0.69645c-0.22506,-0.00307 -0.44458,0.06988 -0.62305,0.20703l-2.5957,1.94531c-0.03445,-0.05886 -0.06035,-0.1234 -0.0957,-0.18164c-1.54031,-2.53763 -1.95391,-4.82386 -1.64453,-6.70508c0.30938,-1.88122 1.3175,-3.4335 3.05078,-4.59766c0.44964,-0.302 0.83226,-0.61989 1.18555,-0.94531l1.99219,1.99219c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-2.13476,-2.13477c0.06477,-0.11254 0.14379,-0.22108 0.19922,-0.33594c0.18613,-0.38568 0.29997,-0.76055 0.38672,-1.125l2.39453,1.19727c0.31959,0.15987 0.7002,0.13706 0.99842,-0.05981c0.29822,-0.19688 0.46874,-0.53791 0.44731,-0.89462c-0.02143,-0.3567 -0.23155,-0.67487 -0.5512,-0.83463l-3.06836,-1.5332c0.02055,-1.17692 0.00638,-1.86563 1.17773,-3.31641c2.50556,-3.10324 9.49774,-4.63987 15.94727,-6.32031c2.5097,-0.65391 10.9012,-1.17898 19.27148,-1.30664c1.10407,-0.01684 2.19895,-0.0166 3.30273,-0.02344l-0.97266,1.94727c-0.15987,0.31959 -0.13706,0.7002 0.05981,0.99842c0.19688,0.29822 0.53791,0.46874 0.89462,0.44731c0.3567,-0.02143 0.67487,-0.23155 0.83463,-0.5512l1.42773,-2.85547c0.23538,-0.00009 0.47891,-0.0062 0.71289,-0.00586zM46.07031,23.51563c-0.57,0.021 -1.02977,0.50789 -1.00977,1.08789c0.02,0.579 0.50984,1.03172 1.08984,1.01172c0.58,-0.021 1.02976,-0.50889 1.00977,-1.08789c-0.02,-0.58 -0.50984,-1.03272 -1.08984,-1.01172zM40.00977,26.68164c-0.577,0.021 -1.02881,0.50789 -1.00781,1.08789c0.021,0.579 0.50689,1.03272 1.08789,1.01172c0.58,-0.021 1.02976,-0.50889 1.00977,-1.08789c-0.02,-0.58 -0.50984,-1.03272 -1.08984,-1.01172zM44.2793,29.88867c-0.58,0.021 -1.02977,0.50889 -1.00977,1.08789c0.02,0.58 0.50984,1.03272 1.08984,1.01172c0.57,-0.021 1.02977,-0.50789 1.00977,-1.08789c-0.02,-0.579 -0.50984,-1.03272 -1.08984,-1.01172zM57.97852,30.97852c-0.20809,0.00692 -0.40883,0.07861 -0.57422,0.20508c-2.64188,0.30124 -4.55508,0.94716 -5.92187,2.0332c-1.77542,1.41074 -2.41301,3.50757 -2.48242,5.8418c-0.01001,0.35122 0.16502,0.68193 0.46107,0.87116c0.29605,0.18923 0.66969,0.20923 0.98424,0.05267c0,0 6.05196,-2.92075 10.5293,-2.80859c4.93719,0.12368 8.06445,0 8.06445,0c0.30289,-0.01151 0.58422,-0.15978 0.76493,-0.40313c0.18071,-0.24335 0.24131,-0.55553 0.16475,-0.84882c0,0 -0.40876,-1.44758 -1.87891,-2.69336c-1.47014,-1.24578 -4.00683,-2.36112 -8.12109,-2.22852c-0.53148,0.01713 -1.03578,0.04543 -1.52148,0.08203c-0.14553,-0.07205 -0.30641,-0.10758 -0.46875,-0.10352zM29.39453,31.95703c-0.134,-0.00104 -0.26683,0.02487 -0.39062,0.07617c-4.78845,0.39967 -7.80273,4.35156 -7.80273,4.35156c-0.22822,0.29258 -0.27569,0.68746 -0.12332,1.02579c0.15237,0.33833 0.47954,0.56449 0.84988,0.58749l15.07227,0.91797v4.0957c-0.70714,-0.06204 -1.47992,-0.19329 -2.87695,0.00977c-0.97071,0.14107 -1.96346,0.37908 -2.71484,1.125c-0.37569,0.37296 -0.65841,0.91026 -0.70898,1.49805c-0.05057,0.58779 0.10416,1.18708 0.4043,1.79688c0.99892,2.02953 1.86382,3.46445 3.12695,4.4043c1.26313,0.93985 2.82523,1.23046 4.80859,1.1543c0.55228,-0.02157 0.98251,-0.48678 0.96094,-1.03906c-0.02157,-0.55228 -0.48678,-0.98251 -1.03906,-0.96094c-1.76664,0.06784 -2.72649,-0.15466 -3.53711,-0.75781c-0.81062,-0.60316 -1.57127,-1.74112 -2.52734,-3.68359c-0.18861,-0.38321 -0.21339,-0.62287 -0.20312,-0.74219c0.01027,-0.11932 0.02788,-0.15748 0.12305,-0.25195c0.19033,-0.18895 0.82009,-0.45202 1.59375,-0.56445c1.54733,-0.22486 3.46875,-0.00781 3.46875,-0.00781c0.28412,0.03463 0.56946,-0.05414 0.7838,-0.24383c0.21434,-0.18969 0.33713,-0.46213 0.33729,-0.74836v-5.99414c0.00016,-0.01042 0.00016,-0.02083 0,-0.03125c0.00017,-0.02345 -0.00048,-0.0469 -0.00195,-0.07031c-0.00063,-0.00326 -0.00129,-0.00651 -0.00195,-0.00977c-0.00196,-0.02943 -0.00522,-0.05875 -0.00977,-0.08789c-0.04276,-0.27736 -0.2001,-0.524 -0.43359,-0.67969c-0.00065,-0.00065 -0.0013,-0.0013 -0.00195,-0.00195c-0.16187,-0.19637 -1.0202,-1.26658 -2.57812,-2.50195c-1.61263,-1.27876 -3.80215,-2.59515 -6.26758,-2.61328c-0.10008,-0.03387 -0.2049,-0.05167 -0.31055,-0.05273zM60.03125,33c3.73574,-0.1204 5.69827,0.85139 6.76563,1.75586c0.26704,0.22629 0.14274,0.21885 0.30859,0.41797c-1.04246,0.02832 -2.33895,0.09372 -6.08008,0c-0.47903,-0.012 -0.95115,0.00408 -1.41797,0.0332c-0.10616,-0.08196 -0.2277,-0.14174 -0.35742,-0.17578c-0.48095,-0.12382 -0.59807,-0.26926 -0.6875,-0.43359c-0.08943,-0.16433 -0.13349,-0.4353 -0.09961,-0.76562c0.02711,-0.26431 0.1023,-0.52587 0.17969,-0.75781c0.43841,-0.03348 0.90008,-0.05847 1.38867,-0.07422zM56.52734,33.33594c-0.01626,0.09918 -0.04214,0.18776 -0.05273,0.29102c-0.05987,0.58367 -0.0258,1.27186 0.33008,1.92578c0.00788,0.01448 0.02108,0.02666 0.0293,0.04102c-2.35534,0.49989 -4.34464,1.33108 -5.56055,1.88086c0.2342,-1.09891 0.61736,-2.02731 1.45312,-2.69141c0.79171,-0.62909 2.01484,-1.13293 3.80078,-1.44727zM29.97656,34.01367c1.65591,0.12381 3.39512,1.10182 4.75195,2.17773c0.38867,0.3082 0.33138,0.33144 0.64258,0.62109l-4.08398,-0.24805c-0.07584,-0.16995 -0.19759,-0.31538 -0.35156,-0.41992c-1.06715,-0.72095 -1.09302,-1.25154 -1.04492,-1.73828c0.01444,-0.14612 0.04749,-0.27476 0.08594,-0.39258zM27.90039,34.23047c-0.05853,0.63977 0.09271,1.4158 0.54688,2.16016l-4.08984,-0.24805c0.8932,-0.74608 2.0576,-1.52875 3.54297,-1.91211zM77.36914,36.97461c-1.69777,0.05203 -3.1617,0.92417 -4.47266,1.7832c-1.49824,0.98175 -2.87978,1.97869 -4.12305,2.26758c-1.1603,0.26961 -3.05513,-0.13445 -4.58984,-0.69531c-1.53471,-0.56086 -2.69922,-1.20508 -2.69922,-1.20508c-0.31262,-0.17317 -0.69388,-0.16637 -1.00012,0.01784c-0.30624,0.18421 -0.49092,0.51782 -0.48445,0.87514c0.00647,0.35732 0.20311,0.68403 0.51582,0.85702c0,0 1.28963,0.71535 2.98242,1.33398c1.69279,0.61864 3.79881,1.21402 5.72852,0.76563c1.84673,-0.42911 3.34636,-1.61492 4.76563,-2.54492c1.41926,-0.93 2.67502,-1.57315 3.89648,-1.43555c1.41713,0.15964 3.14683,0.81311 4.38086,2.05273c1.23403,1.23962 2.05735,3.03179 1.73633,5.83984c-0.04052,0.3552 0.11155,0.70503 0.39892,0.9177c0.28737,0.21267 0.66637,0.25585 0.99422,0.11329c0.32785,-0.14256 0.55472,-0.44921 0.59515,-0.80442c0.37897,-3.31495 -0.67762,-5.84014 -2.30859,-7.47852c-1.63098,-1.63838 -3.75135,-2.42355 -5.57422,-2.62891c-0.25232,-0.02842 -0.49965,-0.03868 -0.74219,-0.03125zM29.35547,40.98633c-0.40156,0.01078 -0.7577,0.26077 -0.9043,0.63477c-0.19385,0.47397 -1.12534,1.10665 -2.36523,1.29102c-1.2399,0.18437 -2.64163,-0.064 -3.49219,-0.70898c-1.59018,-1.20637 -3.77439,-1.07478 -5.58203,-0.8457c-1.80764,0.22907 -3.30273,0.68555 -3.30273,0.68555c-0.34198,0.10391 -0.60254,0.3824 -0.68349,0.73054c-0.08095,0.34813 0.03,0.71301 0.29105,0.95714c0.26105,0.24414 0.63253,0.33044 0.97447,0.22638c0,0 1.3556,-0.41056 2.9707,-0.61523c1.61511,-0.20468 3.42623,-0.07355 4.12305,0.45508c1.43744,1.09002 3.31899,1.34313 4.99609,1.09375c1.6771,-0.24938 3.29578,-0.98569 3.91992,-2.51172c0.13373,-0.31313 0.09897,-0.67279 -0.09227,-0.9545c-0.19124,-0.28172 -0.51266,-0.44678 -0.85304,-0.43807zM75.93555,41.97266c-0.56456,0.01738 -1.09546,0.27265 -1.46158,0.70276c-0.36611,0.43011 -0.53331,0.99496 -0.4603,1.55506c0,0 0.09561,1.07422 0.10547,2.5957c-0.69605,0.03167 -1.44253,0.09041 -2.33203,0.18555c-1.64532,0.17598 -3.59688,0.86593 -6.22461,1.79102c-2.62773,0.92509 -5.7964,2.10062 -9.23633,3.27344c-6.87986,2.34564 -14.87022,4.65596 -21.4082,4.92578c-6.4261,0.26515 -8.72433,-1.82121 -9.89453,-3.80469c-1.1702,-1.98348 -1.0293,-4.03516 -1.0293,-4.03516c0.00586,-0.08321 0.00651,-0.16671 0.00195,-0.25c0.06607,-0.97022 -0.57524,-1.84736 -1.51979,-2.07868c-0.94455,-0.23132 -1.9186,0.25023 -2.30833,1.14118c-2.31542,5.10401 -2.91858,10.34777 -2.64844,14.79883c0.27014,4.45106 1.31481,8.05284 2.79492,10.32031c1.18247,1.81071 3.07896,2.33822 5.29883,2.8457c2.21987,0.50749 4.89374,0.7839 7.76563,0.9082c5.74377,0.2486 12.2366,-0.12683 16.93555,-0.87305c5.26056,-0.8354 11.12888,-4.56206 16.18359,-8.65039c2.52736,-2.04417 4.81684,-4.19043 6.62109,-6.17969c1.80425,-1.98925 3.13365,-3.70713 3.76367,-5.47266c0.44331,-1.24229 0.72806,-2.52654 0.92578,-3.77734c0.30771,0.2163 0.55917,0.38264 0.99219,0.70703c0.88452,0.66231 2.13847,0.48218 2.80078,-0.40234c0.66231,-0.88452 0.48218,-2.13847 -0.40234,-2.80078c-1.10931,-0.83102 -2.00215,-1.50581 -3.03125,-1.96289c0.01332,-2.15856 -0.18164,-3.66602 -0.18164,-3.66602c-0.10622,-1.04428 -1.0016,-1.82881 -2.05078,-1.79687zM49.95508,43.99805c-0.5198,0.01485 -0.9415,0.42558 -0.97003,0.94481c-0.02853,0.51923 0.34561,0.9737 0.86066,1.04542c0,0 1.28522,0.26037 1.95117,0.76758c0.33298,0.25361 0.46321,0.44934 0.46875,0.75c0.0055,0.30066 -0.16685,0.90157 -1.00391,1.82031c-0.25499,0.26144 -0.3472,0.64109 -0.24055,0.99037c0.10666,0.34928 0.39522,0.61265 0.75277,0.68705c0.35755,0.0744 0.72721,-0.05202 0.96434,-0.32976c1.03295,-1.13376 1.54618,-2.1834 1.52734,-3.20508c-0.01883,-1.02168 -0.62329,-1.81946 -1.25781,-2.30273c-1.26904,-0.96654 -2.85352,-1.1543 -2.85352,-1.1543c-0.06578,-0.01119 -0.13252,-0.01577 -0.19922,-0.01367zM44.83789,47.61523c-1.20503,-0.04918 -2.11133,0.22266 -2.11133,0.22266c-0.34771,0.09421 -0.61789,0.36815 -0.70728,0.71713c-0.08939,0.34898 0.01581,0.71908 0.27541,0.96885c0.2596,0.24978 0.63347,0.34063 0.97875,0.23785c0,0 2.52922,-0.66735 3.99219,0.91602c0.23786,0.27917 0.60945,0.40574 0.96826,0.32982c0.35881,-0.07592 0.64729,-0.34214 0.7517,-0.69373c0.10441,-0.35158 0.008,-0.73211 -0.25121,-0.99157c-1.18851,-1.28632 -2.69146,-1.65785 -3.89648,-1.70703zM73.89648,50.84375c-0.15206,1.19323 -0.3923,2.39989 -0.7793,3.48438c-0.07627,0.21374 -0.2782,0.57179 -0.5332,0.98047c-1.1908,0.30683 -2.9793,0.83887 -5.69922,1.75c-0.15279,-1.41714 -0.38226,-2.82944 -0.68164,-4.23633c0.21421,-0.07612 0.48109,-0.17343 0.6875,-0.24609c2.5754,-0.90666 4.66758,-1.51787 5.32227,-1.58789c0.67209,-0.07188 1.20752,-0.11567 1.68359,-0.14453zM64.30469,53.50195c0.28875,1.40293 0.49758,2.81391 0.63477,4.23047c-2.22162,0.76493 -4.8902,1.71318 -8.25195,2.95313l-0.61133,-4.30859c0.51514,-0.17142 1.03753,-0.34201 1.54102,-0.51367c2.44667,-0.83418 4.64721,-1.62748 6.6875,-2.36133zM21.92188,55.76563c0.49279,0.72122 1.11806,1.41828 1.87695,2.05859c-0.33606,1.69719 -0.44064,3.4116 -0.39453,5.13477c-0.80946,-0.20551 -1.39317,-0.38072 -1.89648,-0.5332c-0.11792,-2.06945 -0.00684,-4.33427 0.41406,-6.66016zM54.14453,57.00781l0.61914,4.36133c-2.89393,1.01935 -5.68977,1.75352 -8.34766,2.24414l-0.27148,-4.32617c2.71627,-0.65878 5.40801,-1.44939 8,-2.2793zM70.56836,57.97266c-0.14109,0.16316 -0.26166,0.3185 -0.41211,0.48438c-0.87118,0.96051 -1.89961,1.98669 -3.02344,3.02734c-0.00625,-0.79057 -0.03265,-1.57904 -0.08008,-2.36719c1.39614,-0.47085 2.56234,-0.85046 3.51563,-1.14453zM25.60156,59.07227c0.88475,0.49823 1.89639,0.92073 3.03906,1.24609c-0.22053,1.14435 -0.29957,2.32479 -0.24609,3.53711c-1.09015,-0.17135 -2.11213,-0.35532 -3,-0.54687c-0.06522,-1.41953 -0.00726,-2.8312 0.20703,-4.23633zM44.16992,59.73633l0.26172,4.20313c-2.64959,0.38763 -5.1424,0.54769 -7.45508,0.56055c0.03085,-1.20203 0.21589,-2.42943 0.53906,-3.68555c2.18102,-0.21668 4.41333,-0.59325 6.6543,-1.07812zM65.08789,59.79883c0.05439,1.15148 0.06316,2.30638 0.02734,3.4668c-0.37398,0.31722 -0.74394,0.63628 -1.13086,0.94922c-1.95927,1.58468 -4.08719,3.07286 -6.17969,4.33398l-0.83008,-5.83984c3.30491,-1.22171 5.89903,-2.14327 8.11328,-2.91016zM30.59375,60.74805c1.34543,0.2184 2.83189,0.31834 4.48828,0.25c0.11112,-0.00459 0.22637,-0.01983 0.33789,-0.02539c-0.25791,1.18341 -0.4007,2.35171 -0.42578,3.50391c-1.64347,-0.05178 -3.16191,-0.17555 -4.57031,-0.3418c-0.0802,-1.17835 -0.0325,-2.31011 0.16992,-3.38672zM55.05078,63.38672l0.88477,6.22852c-2.31143,1.24178 -4.49991,2.13223 -6.25,2.41016c-0.83327,0.13233 -1.75959,0.2485 -2.72266,0.35547l-0.42187,-6.76562c2.71,-0.48502 5.55828,-1.21166 8.50977,-2.22852zM21.71875,64.51953c0.54472,0.14825 1.01757,0.28399 1.73828,0.45898c0.26574,2.22235 0.88489,4.46049 1.83984,6.70313c-1.07531,-0.39387 -1.66292,-0.82149 -1.63281,-0.77539c-0.66174,-1.01376 -1.5262,-3.40287 -1.94531,-6.38672zM25.55273,65.3457c0.91903,0.18732 1.95444,0.36415 3.05273,0.52734c0.34079,2.17342 1.08066,4.44275 2.14648,6.78516c-1.07419,-0.09799 -2.08261,-0.21957 -2.98242,-0.37305c-1.16369,-2.35492 -1.87475,-4.66155 -2.2168,-6.93945zM44.55664,65.9375l0.41406,6.62695c-1.90915,0.16366 -3.9269,0.26907 -5.97852,0.31445c-0.01367,-0.11351 -0.0467,-0.22383 -0.09766,-0.32617c-0.99246,-1.98492 -1.61295,-3.99866 -1.82812,-6.07227c2.3299,-0.01129 4.83429,-0.16612 7.49023,-0.54297zM30.69141,66.14063c1.36548,0.15125 2.81261,0.26759 4.37695,0.31641c0.20085,2.22608 0.82722,4.38224 1.79883,6.45898c-1.12549,-0.00114 -2.24128,-0.01792 -3.31641,-0.06445c-0.19412,-0.0084 -0.37668,-0.02321 -0.56836,-0.0332c-0.01588,-0.08792 -0.04347,-0.17331 -0.08203,-0.25391c-1.10056,-2.27707 -1.82786,-4.41389 -2.20898,-6.42383z"/></g></g></svg>
 <h1>Jokes of the Day</h1>
    <h3>${data.value}</h3><small>${data.created_at}</small>
 </div>`
}
 catch (error){
    console.log(error)
 }
}

window.addEventListener("load",()=>{
    getMemeData();
})