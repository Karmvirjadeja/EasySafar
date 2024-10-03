import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyA8L6LHRIkLFPYuY9HZh4Ib4DqFaGi8I8o";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format\n",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days fro Couple with Cheap budget, Give mw Hotels options list with HotelName, Hote address, Price,hotel image url,geo coordinates, rating,description and suggest itinerary with palacName,Place Details,Place image Url, Geo Coordinates,ticket pricing,rating,Timetravel each of location for 3 days with each day plan with best time to visit in json format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50 - $100 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/1321867/1321867_2193720_1_v.jpg",\n      "geoCoordinates": "36.1698,-115.1422",\n      "rating": 4.0,\n      "description": "A downtown casino hotel with a retro vibe, known for its affordable rates and lively atmosphere."\n    },\n    {\n      "hotelName": "Golden Nugget Las Vegas",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$75 - $150 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/33654/33654_1034980_1_v.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "rating": 4.5,\n      "description": "A historic casino hotel with a luxurious feel, featuring a shark tank, multiple pools, and a vibrant nightlife."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40 - $80 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/15170/15170_885701_1_v.jpg",\n      "geoCoordinates": "36.0986,-115.1736",\n      "rating": 3.5,\n      "description": "A budget-friendly casino hotel known for its circus-themed entertainment and family-friendly atmosphere."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "place": "Fremont Street Experience",\n      "placeDetails": "Experience the vibrant atmosphere of Fremont Street, with its iconic canopy, street performers, and numerous casinos.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Fremont_Street_Experience_at_Night.jpg/1280px-Fremont_Street_Experience_at_Night.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day1": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "place": "The Mob Museum",\n      "placeDetails": "Learn about the history of organized crime in Las Vegas, with interactive exhibits and intriguing stories.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Mob_Museum_Las_Vegas.jpg/1280px-The_Mob_Museum_Las_Vegas.jpg",\n      "geoCoordinates": "36.1682,-115.1437",\n      "ticketPricing": "$25 - $35",\n      "rating": 4.0\n    },\n    "day1": {\n      "time": "Evening (6:00 PM - 9:00 PM)",\n      "place": "Downtown Las Vegas",\n      "placeDetails": "Enjoy a delicious and affordable dinner at one of the many restaurants on Fremont Street.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Fremont_Street_Experience_at_Night.jpg/1280px-Fremont_Street_Experience_at_Night.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "ticketPricing": "Varies",\n      "rating": 4.5\n    },\n    "day2": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "place": "Bellagio Conservatory & Botanical Garden",\n      "placeDetails": "Admire the stunning floral displays and artistic creations at the Bellagio Conservatory.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bellagio_conservatory_2009_december.jpg/1280px-Bellagio_conservatory_2009_december.jpg",\n      "geoCoordinates": "36.1147,-115.1722",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day2": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "place": "The Venetian and The Palazzo",\n      "placeDetails": "Stroll through the Grand Canal Shoppes, admire the Venetian architecture, and enjoy the free gondola rides.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Venetian_Resort_Hotel_Casino_%28Las_Vegas%29_01.jpg/1280px-The_Venetian_Resort_Hotel_Casino_%28Las_Vegas%29_01.jpg",\n      "geoCoordinates": "36.1217,-115.1718",\n      "ticketPricing": "Free",\n      "rating": 4.0\n    },\n    "day2": {\n      "time": "Evening (6:00 PM - 9:00 PM)",\n      "place": "Linq Promenade",\n      "placeDetails": "Enjoy the vibrant atmosphere of the Linq Promenade, with its shops, restaurants, and the High Roller observation wheel.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Linq_Promenade_Las_Vegas.jpg/1280px-Linq_Promenade_Las_Vegas.jpg",\n      "geoCoordinates": "36.1157,-115.1728",\n      "ticketPricing": "Varies",\n      "rating": 4.0\n    },\n    "day3": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "place": "Red Rock Canyon National Conservation Area",\n      "placeDetails": "Enjoy scenic drives, hiking trails, and stunning rock formations in Red Rock Canyon.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Red_Rock_Canyon_National_Conservation_Area_%28Las_Vegas%29.jpg/1280px-Red_Rock_Canyon_National_Conservation_Area_%28Las_Vegas%29.jpg",\n      "geoCoordinates": "36.1359,-115.3155",\n      "ticketPricing": "$15 - $25",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "place": "Hoover Dam",\n      "placeDetails": "Take a day trip to Hoover Dam, a historical engineering marvel and a scenic landmark.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Hoover_Dam_from_Arizona_side.jpg/1280px-Hoover_Dam_from_Arizona_side.jpg",\n      "geoCoordinates": "36.0113,-114.9353",\n      "ticketPricing": "Varies",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Evening (6:00 PM - 9:00 PM)",\n      "place": "Las Vegas Strip",\n      "placeDetails": "Enjoy a final night on the Las Vegas Strip, watching the fountain show at the Bellagio and exploring the casino resorts.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Las_Vegas_Strip_Night_2009.jpg/1280px-Las_Vegas_Strip_Night_2009.jpg",\n      "geoCoordinates": "36.1147,-115.1722",\n      "ticketPricing": "Varies",\n      "rating": 5.0\n    }\n  }\n}\n```\n\n**Important Notes:**\n\n* **Hotel Prices:** The price range for hotels is approximate and may vary based on season and availability. \n* **Ticket Pricing:** Admission fees for attractions are also approximate and may vary based on age, group size, and special promotions.\n* **Free Activities:** Take advantage of free activities like the Fremont Street Experience, the Bellagio Conservatory, and the Grand Canal Shoppes to save money.\n* **Food:** Eat at affordable restaurants off the Strip or pack your own snacks and drinks to reduce costs.\n* **Transportation:** Walk or use public transportation whenever possible to avoid expensive parking fees.\n\n**Tips for a Cheap Budget:**\n\n* **Travel during the off-season:**  Consider visiting Las Vegas in the shoulder seasons (spring or fall) to find lower prices on hotels and flights.\n* **Look for deals and discounts:**  Many hotels and attractions offer special deals and discounts, particularly for couples or groups.\n* **Avoid peak hours:**  Visiting attractions during off-peak hours can help you avoid crowds and potentially save money on tickets.\n* **Use coupon books:**  Look for coupon books that offer discounts on restaurants, shows, and other attractions.\n* **Shop for souvenirs after you leave:**  Souvenir shops off the Strip often offer lower prices.\n',
        },
      ],
    },
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotels": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50 - $100 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/1321867/1321867_2193720_1_v.jpg",\n      "geoCoordinates": "36.1698,-115.1422",\n      "rating": 4.0,\n      "description": "A downtown casino hotel with a retro vibe, known for its affordable rates and lively atmosphere."\n    },\n    {\n      "hotelName": "Golden Nugget Las Vegas",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$75 - $150 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/33654/33654_1034980_1_v.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "rating": 4.5,\n      "description": "A historic casino hotel with a luxurious feel, featuring a shark tank, multiple pools, and a vibrant nightlife."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",\n      "price": "$40 - $80 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/15170/15170_885701_1_v.jpg",\n      "geoCoordinates": "36.0986,-115.1736",\n      "rating": 3.5,\n      "description": "A budget-friendly casino hotel known for its circus-themed entertainment and family-friendly atmosphere."\n    },\n    {\n      "hotelName": "Main Street Station Casino, Brewery & Hotel",\n      "hotelAddress": "200 N Main St, Las Vegas, NV 89101",\n      "price": "$45 - $90 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/101091/101091_1576648_1_v.jpg",\n      "geoCoordinates": "36.1704,-115.1410",\n      "rating": 4.0,\n      "description": "A unique hotel with a railroad theme, featuring a brewery, a bowling alley, and a vintage train station."\n    },\n    {\n      "hotelName": "El Cortez Hotel & Casino",\n      "hotelAddress": "600 Fremont St, Las Vegas, NV 89101",\n      "price": "$60 - $120 per night",\n      "hotelImageUrl": "https://images.trvl-media.com/media/content/expedia/hotel-images/26231/26231_2193686_1_v.jpg",\n      "geoCoordinates": "36.1695,-115.1404",\n      "rating": 4.0,\n      "description": "A historic hotel with a classic Las Vegas feel, offering affordable rates and a central location in Downtown Las Vegas."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "place": "Fremont Street Experience",\n      "placeDetails": "Experience the vibrant atmosphere of Fremont Street, with its iconic canopy, street performers, and numerous casinos.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Fremont_Street_Experience_at_Night.jpg/1280px-Fremont_Street_Experience_at_Night.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day1": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "place": "The Mob Museum",\n      "placeDetails": "Learn about the history of organized crime in Las Vegas, with interactive exhibits and intriguing stories.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/The_Mob_Museum_Las_Vegas.jpg/1280px-The_Mob_Museum_Las_Vegas.jpg",\n      "geoCoordinates": "36.1682,-115.1437",\n      "ticketPricing": "$25 - $35",\n      "rating": 4.0\n    },\n    "day1": {\n      "time": "Evening (6:00 PM - 9:00 PM)",\n      "place": "Downtown Las Vegas",\n      "placeDetails": "Enjoy a delicious and affordable dinner at one of the many restaurants on Fremont Street.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Fremont_Street_Experience_at_Night.jpg/1280px-Fremont_Street_Experience_at_Night.jpg",\n      "geoCoordinates": "36.1695,-115.1419",\n      "ticketPricing": "Varies",\n      "rating": 4.5\n    },\n    "day2": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "place": "Bellagio Conservatory & Botanical Garden",\n      "placeDetails": "Admire the stunning floral displays and artistic creations at the Bellagio Conservatory.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bellagio_conservatory_2009_december.jpg/1280px-Bellagio_conservatory_2009_december.jpg",\n      "geoCoordinates": "36.1147,-115.1722",\n      "ticketPricing": "Free",\n      "rating": 4.5\n    },\n    "day2": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "place": "The Venetian and The Palazzo",\n      "placeDetails": "Stroll through the Grand Canal Shoppes, admire the Venetian architecture, and enjoy the free gondola rides.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Venetian_Resort_Hotel_Casino_%28Las_Vegas%29_01.jpg/1280px-The_Venetian_Resort_Hotel_Casino_%28Las_Vegas%29_01.jpg",\n      "geoCoordinates": "36.1217,-115.1718",\n      "ticketPricing": "Free",\n      "rating": 4.0\n    },\n    "day2": {\n      "time": "Evening (6:00 PM - 9:00 PM)",\n      "place": "Linq Promenade",\n      "placeDetails": "Enjoy the vibrant atmosphere of the Linq Promenade, with its shops, restaurants, and the High Roller observation wheel.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Linq_Promenade_Las_Vegas.jpg/1280px-Linq_Promenade_Las_Vegas.jpg",\n      "geoCoordinates": "36.1157,-115.1728",\n      "ticketPricing": "Varies",\n      "rating": 4.0\n    },\n    "day3": {\n      "time": "Morning (9:00 AM - 12:00 PM)",\n      "place": "Red Rock Canyon National Conservation Area",\n      "placeDetails": "Enjoy scenic drives, hiking trails, and stunning rock formations in Red Rock Canyon.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Red_Rock_Canyon_National_Conservation_Area_%28Las_Vegas%29.jpg/1280px-Red_Rock_Canyon_National_Conservation_Area_%28Las_Vegas%29.jpg",\n      "geoCoordinates": "36.1359,-115.3155",\n      "ticketPricing": "$15 - $25",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Afternoon (1:00 PM - 4:00 PM)",\n      "place": "Hoover Dam",\n      "placeDetails": "Take a day trip to Hoover Dam, a historical engineering marvel and a scenic landmark.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Hoover_Dam_from_Arizona_side.jpg/1280px-Hoover_Dam_from_Arizona_side.jpg",\n      "geoCoordinates": "36.0113,-114.9353",\n      "ticketPricing": "Varies",\n      "rating": 4.5\n    },\n    "day3": {\n      "time": "Evening (6:00 PM - 9:00 PM)",\n      "place": "Las Vegas Strip",\n      "placeDetails": "Enjoy a final night on the Las Vegas Strip, watching the fountain show at the Bellagio and exploring the casino resorts.",\n      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Las_Vegas_Strip_Night_2009.jpg/1280px-Las_Vegas_Strip_Night_2009.jpg",\n      "geoCoordinates": "36.1147,-115.1722",\n      "ticketPricing": "Varies",\n      "rating": 5.0\n    }\n  }\n}\n```\n\n**Key Points & Budget-Friendly Tips:**\n\n* **Downtown vs. Strip:**  Downtown Las Vegas offers more affordable hotels, food, and attractions compared to the Strip. \n* **Free Activities:** The itinerary focuses on free attractions like the Fremont Street Experience, Bellagio Conservatory, and Grand Canal Shoppes.\n* **Public Transportation:** Use the Las Vegas Monorail or Deuce bus for affordable transportation between the Strip and Downtown.\n* **Happy Hour:**  Take advantage of happy hour deals at restaurants and bars for discounted drinks and appetizers.\n* **Food Alternatives:** Pack your own snacks and drinks to save money.  Consider grabbing a picnic lunch to enjoy at a park or scenic spot.\n* **Shows & Entertainment:**  Look for free shows or discounted tickets online or through hotel deals.\n* **Casino Rewards:**  If you choose to gamble, look for casinos offering free drinks or comps for playing.\n* **Off-Season Travel:**  Consider visiting during the off-season (spring/fall) for cheaper rates.\n* **Coupon Books:**  Find discount books or websites that offer deals on attractions, restaurants, and shows.\n\n**Additional Budget-Friendly Options:**\n\n* **Free Walking Tours:** Explore Downtown or the Strip with a free walking tour.\n* **Local Casinos:**  Try your luck at smaller casinos, often found in Downtown, that offer better odds.\n* **Free Shows:**  Many casinos offer free shows, including magic, music, and comedy acts.\n* **Free Events:**  Check for free events like concerts, festivals, and outdoor movies.\n\nRemember, with some planning and smart choices, you can have an enjoyable and memorable trip to Las Vegas on a budget! \n',
        },
      ],
    },
  ],
});
