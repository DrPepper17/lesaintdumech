function convertDateToday()                      	
	{
	var d, dateString, day, month, year;
	var answer, calStartDate, date1, date2, dateDiff, inputDate1, inputDate2, totalDays;
	    	
	d = new Date();
	month = d.getMonth() + 1;
	day = d.getDate();
	year = d.getFullYear();
	dateString = month + "/" + day + "/" + year;
	calStartDate = "9/21/1792";							//French Calendar starts on 9/22/1792, so counting starts from a day earlier
	inputDate1 = dateString.split("/");						//"split" method used as a workaround for a defect in the Safari javascript interpreter:
	inputDate2 = calStartDate.split("/");						//	Date(mm/dd/yyyy) function mishandles leap years in century years
   	date1 = new Date(inputDate1[2], inputDate1[0]-1, inputDate1[1]);
   	date2 = new Date(inputDate2[2], inputDate2[0]-1, inputDate2[1]);
	dateDiff = date1.getTime() - date2.getTime();
	totalDays = Math.round(dateDiff / (24*60*60*1000)); 		
	answer=computeFrenchDate(totalDays);						//function call						

    let todayNode = document.getElementById('dateFR');
    let dateTextNode = document.createTextNode(answer);
    let timeNode = document.createTextNode(metricTime()+' ');
    todayNode.appendChild(timeNode);
    todayNode.appendChild(dateTextNode);
	}

function convertSubmittedDate()                       
	{
	var answer, calStartDate, date1, date2, dateDiff, inputDate1, inputDate2, totalDays;
	
	calStartDate = "9/21/1792";
	inputDate1 = document.anyDateConversion.gregDate.value.split("/");
	inputDate2 = calStartDate.split("/");
   	date1 = new Date(inputDate1[2], inputDate1[0]-1, inputDate1[1]);
   	date2 = new Date(inputDate2[2], inputDate2[0]-1, inputDate2[1]);
	dateDiff = date1.getTime() - date2.getTime();
	if (dateDiff <= 0)
		{alert("The first day of the French Revolutionary Calendar is September 22, 1792. Please enter a date later than 9/21/1792.");
		return;}								
	totalDays = Math.round(dateDiff / (24*60*60*1000)); 
	answer=computeFrenchDate(totalDays);						//function call	
	document.anyDateConversion.conversionResult.value = answer;
	}

function computeFrenchDate(x)
	{
	var answer, daycount, revday, revmthnum, revmonth, revyr, romnum, totalDays;
	var leap = new Boolean();
	var test = new Boolean();

	test = false;  					//for debugging, change "test" to true to output to the screen every iteration of the while loop below

	totalDays = x;
	daycount = 1;								
	revday = 0;
	revmthnum = 1;
	revyr = 1;                   	
    	leap = false;    

	while (daycount <= totalDays)			//"while" loop counts through the difference in days, applying the rules of the French calendar
		{					//	and "accumulating" the French date
		revday = revday + 1;
		if (revday == 31)
			{
			revday = 1;
			revmthnum = revmthnum + 1;
			}
		if (revmthnum == 13)
			{
			leap = false;
			if (revyr == 3 || revyr == 7 || revyr == 11 || revyr == 15)	//4 "if" statements apply the Romme rule for French leap years
				{leap = true;}
			if (revyr >= 20 && revyr % 4 == 0)
				{leap = true;}
			if (revyr >= 100 && revyr % 100 == 0)
				{leap = false;}
			if (revyr >= 400 && revyr % 400 == 0)
				{leap = true;}			
			if (!leap)
				{
				if (revday > 5)
									
					{revday = 1;
					revmthnum = 1;
					revyr = revyr + 1;}
				}
			if (leap)
				{
				if (revday > 6)
					{revday = 1;
					revmthnum = 1;
					revyr = revyr + 1;}
				}			
			}
		daycount = daycount + 1;

		if (test)
			{
			document.write (revmthnum + "&nbsp" + "&nbsp" + revday + "&nbsp" + "&nbsp" + revyr); 
			document.write ("<br>");
			}
		}                     	

	switch(revmthnum)
		{
            case 1: revmonth = "Vendémiaire";	//vintage
                break;
            case 2: revmonth = "Brumaire";		//fog
                break;
            case 3: revmonth = "Frimaire";		//sleet			
                break;
            case 4: revmonth = "Nivôse";		//snow
                break;
            case 5: revmonth = "Pluviôse";		//rain
                break;
            case 6: revmonth = "Ventôse";		//wind
                break;
            case 7: revmonth = "Germinal";		//seed
                break;
            case 8: revmonth = "Floréal";		//blossom
                break;
            case 9: revmonth = "Prairial";		//pasture
                break;
            case 10: revmonth = "Messidor";		//harvest
                break;
            case 11: revmonth = "Thermidor";	//heat
                break;
            case 12: revmonth = "Fructidor";	//fruit
                break;
            case 13: revmonth = "Sans-culottide";
                break;
		}

    switch(revday)
        {
            case 1: revday = "Décade I Primidi 1er du";
                break;
            case 2: revday = "Décade I Duodi 2er du";
                break;
            case 3: revday = "Décade I Tridi 3er du";
                break;
            case 4: revday = "Décade I Quartidi 4er du";
                break;
            case 5: revday = "Décade I Quintidi 5er du";
                break;
            case 6: revday = "Décade I Sextidi 6er du";
                break;
            case 7: revday = "Décade I Septidi 7er du";
                break;
            case 8: revday = "Décade I Octidi 8er du";
                break;
            case 9: revday = "Décade I Nonidi 9er du";
                break;
            case 10: revday = "Décade I Décadi 10er du";
                break;
            case 11: revday = "Décade II Primidi 11er du";
                break;
            case 12: revday = "Décade II Duodi 12er du";
                break;
            case 13: revday = "Décade II Tridi 13er du";
                break;
            case 14: revday = "Décade II Quartidi 14er du";
                break;
            case 15: revday = "Décade II Quintidi 15er du";
                break;
            case 16: revday = "Décade II Sextidi 16er du";
                break;
            case 17: revday = "Décade II Septidi 17er du";
                break;
            case 18: revday = "Décade II Octidi 18er du";
                break;
            case 19: revday = "Décade II Nonidi 19er du";
                break;
            case 20: revday = "Décade II Décadi 20er du";
                break;
            case 21: revday = "Décade III Primidi 21er du";
                break;
            case 22: revday = "Décade III Duodi 22er du";
                break;
            case 23: revday = "Décade III Tridi 23er du";
                break;
            case 24: revday = "Décade III Quartidi 24er du";
                break;
            case 25: revday = "Décade III Quintidi 25er du";
                break;
            case 26: revday = "Décade III Sextidi 26er du";
                break;
            case 27: revday = "Décade III Septidi 27er du";
                break;
            case 28: revday = "Décade III Octidi 28er du";
                break;
            case 29: revday = "Décade III Nonidi 29er du";
                break;
            case 30: revday = "Décade III Décadi 30er du";
                break;
        }

	romnum=rnConverter(revyr);							//function call
	answer = revday + " " + revmonth + " " + romnum;			
	return answer;
	}

function rnConverter(aN)
	{
    	var aN, Cs, i, Ms, remainder, romanNumeral, Xs;

    	Ms = Math.floor(aN/1000);
   	romanNumeral = "";
   	i = 0;
    	while (i < Ms)             			//4 "while" loops accumulate the characters of the Roman numeral from left to right
		{
		romanNumeral = romanNumeral + "M";
		i = i + 1;
		}
	remainder = aN % 1000;
	if (remainder == 999)                
		{
		romanNumeral = romanNumeral + "CMXCIX";
		remainder = 0;
		}
	else
		if (remainder > 989)
			{romanNumeral = romanNumeral + "CMXC";
			remainder = remainder - 990;}
		else
			if (remainder > 899)
				{romanNumeral = romanNumeral + "CM";
				remainder = remainder - 900;}                      
       			else
          			if (remainder > 499)
           				{romanNumeral = romanNumeral + "D";                                   
             				remainder = remainder - 500;}                     
          			else
             				if (remainder > 489)
             					{romanNumeral = romanNumeral + "CDXC";                                 
               				 	remainder = remainder - 490;}                       
             				else
             					if (remainder > 399)
                  					{romanNumeral = romanNumeral + "CD";                       
                    					remainder = remainder - 400;}

	Cs =Math.floor(remainder/100);                                    
    	i = 0;
	while (i < Cs )                 
       		{romanNumeral = romanNumeral + "C";
		i = i + 1 ;}                                       
    	remainder = remainder % 100;                            
        if (remainder == 99) 
          	{romanNumeral = romanNumeral + "XCIX";
	     	remainder = 0;}
        if (remainder > 89)
            	{romanNumeral = romanNumeral + "XC";                                 
            	remainder = remainder - 90;}                    
        else
            	if (remainder > 49)
                	{romanNumeral = romanNumeral + "L";                          
               		remainder = remainder - 50;}           
           	else
                	if (remainder > 39)
                    		{romanNumeral = romanNumeral + "XL";                      
                    		remainder = remainder - 40;}          
 	 Xs =Math.floor(remainder/10);                                  
   	 i = 0;
	while (i< Xs)                  
        	{romanNumeral = romanNumeral + "X";
		i=i+1;}                                   
        remainder = remainder % 10;                         
    	if (remainder == 9)
        	{romanNumeral = romanNumeral + "IX";
		remainder= 0;}
	else
    		if (remainder > 4)
        		{romanNumeral = romanNumeral + "V";                                     
        		remainder = remainder - 5;}                       
    		else
    			if (remainder == 4) 
        			{romanNumeral = romanNumeral + "IV";
				remainder = remainder - 4;}
   	i=0;
   	while (i < remainder )   
        	{romanNumeral = romanNumeral + "I";
		i = i + 1 ;}                                   
  	return romanNumeral;
	}

function metricTime() {

    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let totalSeconds = seconds + (minutes*60) + (hours*3600);
    let hoursFR = Math.trunc(totalSeconds / 8640);
    totalSeconds = totalSeconds - (hoursFR * 8640);
    let minutesFR = Math.trunc(totalSeconds / 86.4);

    return hoursFR+':'+minutesFR;
}
    