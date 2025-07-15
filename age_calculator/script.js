const events = {
  1900: "The Boxer Rebellion in China intensifies.",
  1901: "Queen Victoria of the United Kingdom dies; Edward VII becomes king.",
  1902: "The Second Boer War ends.",
  1903: "The Wright brothers make the first powered flight.",
  1904: "The Russo-Japanese War begins.",
  1905: "Albert Einstein publishes the theory of special relativity.",
  1906: "San Francisco earthquake devastates the city.",
  1907: "The first Scout movement is founded by Robert Baden-Powell.",
  1908: "The Tunguska event occurs in Siberia.",
  1909: "The first successful expedition to the North Pole by Robert Peary.",
  1910: "Halley's Comet makes a visible return.",
  1911: "The rediscovery of Machu Picchu by Hiram Bingham.",
  1912: "The RMS Titanic sinks on its maiden voyage.",
  1913: "The first assembly line introduced by Henry Ford.",
  1914: "World War I begins.",
  1915: "The sinking of the RMS Lusitania by a German U-boat.",
  1916: "The Battle of the Somme takes place in World War I.",
  1917: "The Russian Revolution leads to the abdication of Tsar Nicholas II.",
  1918: "World War I ends with the signing of the Armistice.",
  1919: "The Treaty of Versailles officially ends World War I.",
  1920: "The League of Nations is established.",
  1921: "Albert Einstein wins the Nobel Prize in Physics.",
  1922: "The discovery of Tutankhamun's tomb by Howard Carter.",
  1923: "The Great Kanto earthquake devastates Tokyo and Yokohama.",
  1924: "The first Winter Olympics are held in Chamonix, France.",
  1925: "Adolf Hitler publishes 'Mein Kampf.'",
  1926: "Television is demonstrated publicly for the first time.",
  1927: "Charles Lindbergh completes the first solo nonstop transatlantic flight.",
  1928: "Alexander Fleming discovers penicillin.",
  1929: "The Wall Street Crash marks the start of the Great Depression.",
  1930: "Pluto is discovered by Clyde Tombaugh.",
  1931: "The Empire State Building is completed in New York City.",
  1932: "Amelia Earhart becomes the first woman to fly solo across the Atlantic.",
  1933: "Adolf Hitler becomes Chancellor of Germany.",
  1934: "The Dust Bowl begins in the United States.",
  1935: "The Hoover Dam is completed.",
  1936: "The Spanish Civil War begins.",
  1937: "The Hindenburg disaster occurs in New Jersey.",
  1938: "The Munich Agreement is signed, attempting to appease Nazi Germany.",
  1939: "World War II begins with Germany's invasion of Poland.",
  1940: "Winston Churchill becomes Prime Minister of the UK.",
  1941: "The attack on Pearl Harbor brings the US into World War II.",
  1942: "The Manhattan Project to develop nuclear weapons begins.",
  1943: "The Warsaw Ghetto Uprising occurs.",
  1944: "D-Day: Allied forces land on the beaches of Normandy.",
  1945: "World War II ends; the United Nations is established.",
  1946: "The first meeting of the United Nations General Assembly.",
  1947: "India and Pakistan gain independence from Britain.",
  1948: "The State of Israel is established.",
  1949: "NATO is founded.",
  1950: "The Korean War begins.",
  1951: "The first commercial computer, UNIVAC I, is introduced.",
  1952: "Elizabeth II becomes Queen of the United Kingdom.",
  1953: "The DNA double helix structure is discovered.",
  1954: "The first nuclear power plant opens in Obninsk, Russia.",
  1955: "Rosa Parks sparks the Montgomery Bus Boycott.",
  1956: "The Suez Crisis occurs.",
  1957: "The Soviet Union launches Sputnik, the first artificial satellite.",
  1958: "NASA is established.",
  1959: "The Cuban Revolution is led by Fidel Castro.",
  1960: "The first televised US presidential debates between Kennedy and Nixon.",
  1961: "Yuri Gagarin becomes the first human in space.",
  1962: "The Cuban Missile Crisis brings the world to the brink of nuclear war.",
  1963: "President John F. Kennedy is assassinated in Dallas, Texas.",
  1964: "The Civil Rights Act is signed into law in the United States.",
  1965: "The Vietnam War escalates with US combat troops.",
  1966: "The first Star Trek episode airs.",
  1967: "The Six-Day War is fought between Israel and neighboring countries.",
  1968: "Martin Luther King Jr. is assassinated.",
  1969: "Apollo 11 lands on the moon; Neil Armstrong walks on the moon.",
  1970: "Earth Day is celebrated for the first time.",
  1971: "Intel releases the first microprocessor, the 4004.",
  1972: "The Watergate scandal begins.",
  1973: "The Yom Kippur War occurs in the Middle East.",
  1974: "US President Richard Nixon resigns over Watergate.",
  1975: "The Vietnam War ends with the fall of Saigon.",
  1976: "The Concorde begins commercial supersonic flights.",
  1977: "The first Star Wars movie is released.",
  1978: "The Camp David Accords are signed.",
  1979: "The Iranian Revolution overthrows the Shah.",
  1980: "Mount St. Helens erupts in Washington.",
  1981: "The first Space Shuttle, Columbia, is launched.",
  1982: "The Falklands War occurs between the UK and Argentina.",
  1983: "The internet's Domain Name System (DNS) is introduced.",
  1984: "Indira Gandhi, Prime Minister of India, is assassinated.",
  1985: "The Live Aid concerts are held to combat famine in Ethiopia.",
  1986: "The Chernobyl nuclear disaster occurs in Ukraine.",
  1987: "The stock market crashes on Black Monday.",
  1988: "Pan Am Flight 103 is bombed over Lockerbie, Scotland.",
  1989: "The Berlin Wall falls, symbolizing the end of the Cold War.",
  1990: "Nelson Mandela is released from prison.",
  1991: "The Soviet Union dissolves.",
  1992: "The Maastricht Treaty establishes the European Union.",
  1993: "The World Trade Center is bombed for the first time.",
  1994: "Nelson Mandela becomes President of South Africa.",
  1995: "The Oklahoma City bombing occurs.",
  1996: "The first cloned sheep, Dolly, is born.",
  1997: "Princess Diana dies in a car crash.",
  1998: "Google is founded.",
  1999: "NATO intervenes in Kosovo.",
  2000: "The dot-com bubble peaks.",
  2001: "September 11 terrorist attacks occur in the US.",
  2002: "The Euro becomes the official currency of many European countries.",
  2003: "The Iraq War begins.",
  2004: "The Indian Ocean tsunami kills over 230,000 people.",
  2005: "Hurricane Katrina devastates New Orleans.",
  2006: "Twitter is launched.",
  2007: "The first iPhone is released by Apple.",
  2008: "Barack Obama is elected as the first African-American US President.",
  2009: "Bitcoin is created as the first cryptocurrency.",
  2010: "The Haiti earthquake kills over 200,000 people.",
  2011: "Osama bin Laden is killed by US forces.",
  2012: "The Curiosity rover lands on Mars.",
  2013: "Pope Francis becomes the first Jesuit pope.",
  2014: "The Ebola outbreak kills thousands in West Africa.",
  2015: "The Paris Climate Agreement is adopted.",
  2016: "The United Kingdom votes to leave the European Union (Brexit).",
  2017: "The first observation of gravitational waves from merging neutron stars.",
  2018: "The Camp Fire becomes California's deadliest wildfire.",
  2019: "Notre Dame Cathedral in Paris catches fire.",
  2020: "The COVID-19 pandemic begins.",
  2021: "The James Webb Space Telescope is launched.",
  2022: "Russia invades Ukraine, sparking global sanctions.",
  2023: "ChatGPT gains massive popularity in AI discussions.",
  2024: "Donald Trump was Elected as the US president for the second time",
};

const labelDay = document.querySelector(".label-day");
const labelMonth = document.querySelector(".label-month");
const labelYear = document.querySelector(".label-year");
const labelName = document.querySelector(".name");
const nameInput = document.querySelector(".username-input");
const lbYears = document.querySelector(".lb-year");
const lbMonths = document.querySelector(".lb-month");
const lbDays = document.querySelector(".lb-day");
const btnCalculate = document.querySelector(".btn-calculate");
const resultDiv = document.querySelector('.result')
const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
// Validating The user Input
let days, months, years, dayBorn, monthBorn, yearBorn, username;


btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();

  // USER INPUTS
  dayBorn = Number(dayInput.value);
  monthBorn = Number(monthInput.value);
  yearBorn = Number(yearInput.value);

  // Creating The current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  username = nameInput.value;

  const firstLetter = username.charAt(0).toUpperCase();
  const remLetters = username.slice(1).toLowerCase();
  const ValidtedUsername = firstLetter + remLetters;

  if (
    username &&
    dayBorn > 0 &&
    dayBorn <= 31 &&
    monthBorn > 0 &&
    monthBorn <= 12 &&
    yearBorn <= currentYear &&
    yearBorn >= 1900
  ) {
    const calculatedDays = Math.abs(currentDay - dayBorn);
    const calculatedMonths = Math.abs(currentMonth - monthBorn);
    const calculatedYears = currentYear - yearBorn;

    const duration = 500; // Animation duration in ms
    const startTime = performance.now();

    // Animate numbers
    function animateNumbers(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Calculate the current values
      const animatedDays = Math.floor(progress * calculatedDays);
      const animatedMonths = Math.floor(progress * calculatedMonths);
      const animatedYears = Math.floor(progress * calculatedYears);

      // Update UI
      lbYears.textContent = animatedYears;
      lbMonths.textContent = animatedMonths;
      lbDays.textContent = animatedDays;

      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    }

    requestAnimationFrame(animateNumbers);

    // Display the event message if applicable
    if (events[yearBorn] && username) {
      const eventMessage = `<h4 class="lb-event">Hey 👋
      <span class="name">${ValidtedUsername}</span> in Your BirthYear <span class="name">${yearBorn},</span> ${events[yearBorn]}
     </h4>`;
      resultDiv.insertAdjacentHTML("beforeend", eventMessage);
    }
  } else {
    // Handle input errors
    if (!dayBorn || dayBorn > 31) {
      dayInput.classList.add("error");
      labelDay.style.color = "Red";
    }
    if (!username) {
      nameInput.classList.add("error");
    }
    if (!monthBorn || monthBorn > 12) {
      monthInput.classList.add("error");
      labelMonth.style.color = "Red";
    }
    if (!yearBorn || yearBorn > currentYear) {
      yearInput.classList.add("error");
      labelYear.style.color = "Red";
    }
  }

  dayInput.value = monthInput.value = yearInput.value = nameInput.value = "";
});
