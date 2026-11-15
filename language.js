(function () {
    "use strict";

    const translations = {
        en: {
            "Language": "Language",
            "Dashboard": "Dashboard",
            "Farmer Dashboard": "Farmer Dashboard",
            "MAIN MENU": "MAIN MENU",
            "ACCOUNT": "ACCOUNT",
            "Weather": "Weather",
            "Irrigation": "Irrigation",
            "Crop Guide": "Crop Guide",
            "Pest Management": "Pest Management",
            "Soil Health": "Soil Health",
            "Pesticide Advisory": "Pesticide Advisory",
            "My Profile": "My Profile",
            "Home": "Home",
            "SMART AGRICULTURE PLATFORM": "SMART AGRICULTURE PLATFORM",
            "Farmer Account": "Farmer Account",
            "Farm Management": "FARM MANAGEMENT",
            "Welcome to Smart Farming!": "Welcome to Smart Farming!",
            "Manage your crops, monitor soil, and make informed farming decisions.": "Manage your crops, monitor soil, and make informed farming decisions.",
            "Temperature": "Temperature",
            "Humidity": "Humidity",
            "Rainfall": "Rainfall",
            "Farm Management Tools": "Farm Management Tools",
            "Use the tools below to monitor your farm.": "Use the tools below to monitor your farm.",
            "Live Weather": "Live Weather",
            "Current weather conditions": "Current weather conditions",
            "Location: Bengaluru": "Location: Bengaluru",
            "Refresh Weather": "Refresh Weather",
            "Smart Irrigation": "Smart Irrigation",
            "Check your soil moisture": "Check your soil moisture",
            "Soil Moisture (%)": "Soil Moisture (%)",
            "Enter moisture (0-100)": "Enter moisture (0-100)",
            "Check Irrigation": "Check Irrigation",
            "Select Crop": "Select Crop",
            "Select Pest": "Select Pest",
            "Get Advisory 🌱": "Get Advisory 🌱",
            "Logout": "Logout",
            "Login": "Login",
            "Create Account": "Create Account",
            "About Project": "About Project",
            "Features": "Features",
            "About Our Project": "About Our Project",
            "Our Features": "Our Features",
            "Problem Statement": "Problem Statement",
            "Project Objectives": "Project Objectives",
            "Proposed Solution": "Proposed Solution",
            "Crop & Pest Details": "Crop & Pest Details",
            "Choose crop": "Choose crop",
            "Choose stage": "Choose stage",
            "Location (Village / District)": "Location (Village / District)",
            "Upload Pest / Crop Image": "Upload Pest / Crop Image",
            "Analyze Crop Image 🔍": "Analyze Crop Image 🔍",
            "Crop Growth Stage": "Crop Growth Stage",
            "Important Safety Notice": "Important Safety Notice",
            "Fertilizer Calculator": "Fertilizer Calculator",
            "Grow smarter": "Grow smarter",
            "Make farming more sustainable every day.": "Make farming more sustainable every day.",
            "Crop Recommendation": "Crop Recommendation",
            "Find suitable crops": "Find suitable crops",
            "Soil Type": "Soil Type",
            "Select Soil": "Select Soil",
            "Clay Soil": "Clay Soil",
            "Loamy Soil": "Loamy Soil",
            "Sandy Soil": "Sandy Soil",
            "Black Soil": "Black Soil",
            "Water Availability": "Water Availability",
            "Select Water": "Select Water",
            "High": "High",
            "Medium": "Medium",
            "Low": "Low",
            "Recommend Crop": "Recommend Crop",
            "Pest & disease guidance": "Pest & disease guidance",
            "Get general pest guidance": "Get general pest guidance",
            "Observed Symptoms": "Observed Symptoms",
            "Select Symptom": "Select Symptom",
            "Yellow Leaves": "Yellow Leaves",
            "Holes in Leaves": "Holes in Leaves",
            "Leaf Spots": "Leaf Spots",
            "Wilting": "Wilting",
            "Get Guidance": "Get Guidance",
            "Review soil test values": "Review soil test values",
            "Soil pH": "Soil pH",
            "Enter soil pH": "Enter soil pH",
            "Nitrogen (N)": "Nitrogen (N)",
            "Enter N value": "Enter N value",
            "Phosphorus (P)": "Phosphorus (P)",
            "Enter P value": "Enter P value",
            "Potassium (K)": "Potassium (K)",
            "Enter K value": "Enter K value",
            "Check Soil": "Check Soil",
            "Farmer Profile": "Farmer Profile",
            "Your account information": "Your account information",
            "View Profile": "View Profile",
            "Smart Agriculture Solution": "Smart Agriculture Solution",
            "Technology for Better Farming": "Technology for Better Farming",
            "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.": "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.",
            "Get Started 🌾": "Get Started 🌾",
            "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.": "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.",
            "Live weather information for farming.": "Live weather information for farming.",
            "Soil moisture-based irrigation guidance.": "Soil moisture-based irrigation guidance.",
            "Basic crop recommendations.": "Basic crop recommendations.",
            "Crop symptom information and guidance.": "Crop symptom information and guidance.",
            "Basic soil pH and nutrient information.": "Basic soil pH and nutrient information.",
            "Personal farmer account information.": "Personal farmer account information.",
            "Smart Agriculture Solution | AIML Community Project": "Smart Agriculture Solution | AIML Community Project",
            "Technology for Sustainable Agriculture 🌱": "Technology for Sustainable Agriculture 🌱",
            "Pesticide Advisory System": "Pesticide Advisory System",
            "Identify crop concerns and explore safer pest-management guidance.": "Identify crop concerns and explore safer pest-management guidance.",
            "Your uploaded image will appear here.": "Your uploaded image will appear here.",
            "Enter your soil test values to view soil guidance.": "Enter your soil test values to view soil guidance.",
            "Get Soil Guidance": "Get Soil Guidance",
            "Crop Health Dashboard": "Crop Health Dashboard",
            "Monitor your crop condition.": "Monitor your crop condition.",
            "Pest Monitoring": "Pest Monitoring",
            "Not Checked": "Not Checked",
            "Check Crop Health": "Check Crop Health",
            "Seedling": "Seedling",
            "Vegetative": "Vegetative",
            "Flowering": "Flowering",
            "Fruiting / Harvest stage": "Fruiting / Harvest stage",
            "Tomato": "Tomato",
            "Rice": "Rice",
            "Maize": "Maize",
            "Cotton": "Cotton",
            "Other Vegetables": "Other Vegetables",
            "Symptoms:": "Symptoms:",
            "Management:": "Management:",
            "Organic Control:": "Organic Control:",
            "Prevention:": "Prevention:",
            "Crop Health Summary": "Crop Health Summary",
            "Crop Image Analysis": "Crop Image Analysis",
            "-- Select Crop First --": "-- Select Crop First --",
            "About Our Project 🌾": "About Our Project 🌾",
            "Smart Agriculture Solution – Technology for Better Farming": "Smart Agriculture Solution – Technology for Better Farming",
            "📌 Problem Statement": "📌 Problem Statement",
            "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.": "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.",
            "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.": "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.",
            "🎯 Project Objectives": "🎯 Project Objectives",
            "Reduce Overuse of Pesticides": "Reduce Overuse of Pesticides",
            "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.": "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.",
            "Improve Crop Health and Yield": "Improve Crop Health and Yield",
            "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.": "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.",
            "Promote Safe and Sustainable Farming": "Promote Safe and Sustainable Farming",
            "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.": "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.",
            "💡 Proposed Solution": "💡 Proposed Solution",
            "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard.": "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard."
        },
        kn: {
            "Language": "ಭಾಷೆ",
            "Dashboard": "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "Farmer Dashboard": "ರೈತರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "MAIN MENU": "ಮುಖ್ಯ ಮೆನು",
            "ACCOUNT": "ಖಾತೆ",
            "Weather": "ಹವಾಮಾನ",
            "Irrigation": "ನೀರಾವರಿ",
            "Crop Guide": "ಬೆಳೆ ಮಾರ್ಗದರ್ಶಿ",
            "Pest Management": "ಕೀಟ ನಿರ್ವಹಣೆ",
            "Soil Health": "ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
            "Pesticide Advisory": "ಕೀಟನಾಶಕ ಸಲಹೆ",
            "My Profile": "ನನ್ನ ಪ್ರೊಫೈಲ್",
            "Home": "ಮುಖಪುಟ",
            "SMART AGRICULTURE PLATFORM": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ವೇದಿಕೆ",
            "Farmer Account": "ರೈತರ ಖಾತೆ",
            "Farm Management": "ಕೃಷಿ ನಿರ್ವಹಣೆ",
            "Welcome to Smart Farming!": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿಗೆ ಸ್ವಾಗತ!",
            "Manage your crops, monitor soil, and make informed farming decisions.": "ನಿಮ್ಮ ಬೆಳೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಮಣ್ಣನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ ಮತ್ತು ಮಾಹಿತಿಯುಕ್ತ ಕೃಷಿ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.",
            "Temperature": "ತಾಪಮಾನ",
            "Humidity": "ಆರ್ದ್ರತೆ",
            "Rainfall": "ಮಳೆ ಪ್ರಮಾಣ",
            "Farm Management Tools": "ಕೃಷಿ ನಿರ್ವಹಣಾ ಸಾಧನಗಳು",
            "Use the tools below to monitor your farm.": "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಲು ಕೆಳಗಿನ ಸಾಧನಗಳನ್ನು ಬಳಸಿ.",
            "Live Weather": "ಪ್ರಸ್ತುತ ಹವಾಮಾನ",
            "Current weather conditions": "ಪ್ರಸ್ತುತ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳು",
            "Location: Bengaluru": "ಸ್ಥಳ: ಬೆಂಗಳೂರು",
            "Refresh Weather": "ಹವಾಮಾನ ನವೀಕರಿಸಿ",
            "Smart Irrigation": "ಸ್ಮಾರ್ಟ್ ನೀರಾವರಿ",
            "Check your soil moisture": "ನಿಮ್ಮ ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಪರಿಶೀಲಿಸಿ",
            "Soil Moisture (%)": "ಮಣ್ಣಿನ ತೇವಾಂಶ (%)",
            "Enter moisture (0-100)": "ತೇವಾಂಶ ನಮೂದಿಸಿ (0-100)",
            "Check Irrigation": "ನೀರಾವರಿ ಪರಿಶೀಲಿಸಿ",
            "Select Crop": "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
            "Select Pest": "ಕೀಟ ಆಯ್ಕೆಮಾಡಿ",
            "Get Advisory 🌱": "ಸಲಹೆ ಪಡೆಯಿರಿ 🌱",
            "Logout": "ಲಾಗ್‌ಔಟ್",
            "Login": "ಲಾಗಿನ್",
            "Create Account": "ಖಾತೆ ರಚಿಸಿ",
            "About Project": "ಯೋಜನೆಯ ಬಗ್ಗೆ",
            "Features": "ವೈಶಿಷ್ಟ್ಯಗಳು",
            "About Our Project": "ನಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ",
            "Our Features": "ನಮ್ಮ ವೈಶಿಷ್ಟ್ಯಗಳು",
            "Problem Statement": "ಸಮಸ್ಯೆಯ ಹೇಳಿಕೆ",
            "Project Objectives": "ಯೋಜನೆಯ ಉದ್ದೇಶಗಳು",
            "Proposed Solution": "ಪ್ರಸ್ತಾಪಿತ ಪರಿಹಾರ",
            "Crop & Pest Details": "ಬೆಳೆ ಮತ್ತು ಕೀಟದ ವಿವರಗಳು",
            "Choose crop": "ಬೆಳೆ ಆಯ್ಕೆಮಾಡಿ",
            "Choose stage": "ಹಂತ ಆಯ್ಕೆಮಾಡಿ",
            "Location (Village / District)": "ಸ್ಥಳ (ಗ್ರಾಮ / ಜಿಲ್ಲೆ)",
            "Upload Pest / Crop Image": "ಕೀಟ / ಬೆಳೆ ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            "Analyze Crop Image 🔍": "ಬೆಳೆ ಚಿತ್ರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ 🔍",
            "Crop Growth Stage": "ಬೆಳೆಯ ಬೆಳವಣಿಗೆಯ ಹಂತ",
            "Important Safety Notice": "ಪ್ರಮುಖ ಸುರಕ್ಷತಾ ಸೂಚನೆ",
            "Fertilizer Calculator": "ರಸಗೊಬ್ಬರ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
            "Grow smarter": "ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಬೆಳೆಸಿ",
            "Make farming more sustainable every day.": "ಪ್ರತಿದಿನ ಕೃಷಿಯನ್ನು ಹೆಚ್ಚು ಸುಸ್ಥಿರಗೊಳಿಸಿ",
            "Crop Recommendation": "ಬೆಳೆ ಶಿಫಾರಸು",
            "Find suitable crops": "ಸೂಕ್ತ ಬೆಳೆಗಳನ್ನು ಹುಡುಕಿ",
            "Soil Type": "ಮಣ್ಣಿನ ವಿಧ",
            "Select Soil": "ಮಣ್ಣನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            "Clay Soil": "ಜೇಡಿಮಣ್ಣು",
            "Loamy Soil": "ಗೋಡು ಮಣ್ಣು",
            "Sandy Soil": "ಮರಳು ಮಣ್ಣು",
            "Black Soil": "ಕಪ್ಪು ಮಣ್ಣು",
            "Water Availability": "ನೀರಿನ ಲಭ್ಯತೆ",
            "Select Water": "ನೀರನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            "High": "ಹೆಚ್ಚು",
            "Medium": "ಮಧ್ಯಮ",
            "Low": "ಕمی",
            "Recommend Crop": "ಬೆಳೆ ಶಿಫಾರಸು ಮಾಡಿ",
            "Pest & disease guidance": "ಕೀಟ ಮತ್ತು ರೋಗ ಮಾರ್ಗದರ್ಶನ",
            "Get general pest guidance": "ಸಾಮಾನ್ಯ ಕೀಟ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
            "Observed Symptoms": "ಕಂಡಬಂದ ಲಕ್ಷಣಗಳು",
            "Select Symptom": "ಲಕ್ಷಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
            "Yellow Leaves": "ಹಳದಿ ಎಲೆಗಳು",
            "Holes in Leaves": "ಎಲೆಗಳಲ್ಲಿ ತೂತುಗಳು",
            "Leaf Spots": "ಎಲೆಗಳ ಮೇಲೆ ಕಲೆಗಳು",
            "Wilting": "ಬಾಡುವುದು",
            "Get Guidance": "ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
            "Review soil test values": "ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮೌಲ್ಯಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
            "Soil pH": "ಮಣ್ಣಿನ ಪಿಎಚ್ (pH)",
            "Enter soil pH": "ಮಣ್ಣಿನ pH ನಮೂದಿಸಿ",
            "Nitrogen (N)": "ಸಾರಜನಕ (N)",
            "Enter N value": "N ಮೌಲ್ಯ ನಮೂದಿಸಿ",
            "Phosphorus (P)": "ರಂಜಕ (P)",
            "Enter P value": "P ಮೌಲ್ಯ ನಮೂದಿಸಿ",
            "Potassium (K)": "ಪೊಟ್ಯಾಸಿಯಮ್ (K)",
            "Enter K value": "K ಮೌಲ್ಯ ನಮೂದಿಸಿ",
            "Check Soil": "ಮಣ್ಣು ಪರಿಶೀಲಿಸಿ",
            "Farmer Profile": "ರೈತರ ಪ್ರೊಫೈಲ್",
            "Your account information": "ನಿಮ್ಮ ಖಾತೆ ಮಾಹಿತಿ",
            "View Profile": "ಪ್ರೊಫೈಲ್ ವೀಕ್ಷಿಸಿ",
            "Smart Agriculture Solution": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರ",
            "Technology for Better Farming": "ಉತ್ತಮ ಕೃಷಿಗಾಗಿ ತಂತ್ರಜ್ಞಾನ",
            "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.": "ಸ್ಮಾರ್ಟ್ ತಂತ್ರಜ್ಞಾನ, ಹವಾಮಾನ ಮಾಹಿತಿ, ನೀರಾವರಿ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಬೆಳೆ ಶಿಫಾರಸುಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.",
            "Get Started 🌾": "ಪ್ರಾರಂಭಿಸಿ 🌾",
            "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರವು ರೈತರಿಗೆ ಉಪಯುಕ್ತ ಕೃಷಿ ಮಾಹಿತಿ ಮತ್ತು ಬುದ್ಧಿವಂತ ಕೃಷಿ ಮಾರ್ಗದರ್ಶನವನ್ನು ಒದಗಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ತಂತ್ರಜ್ಞಾನ-ಆಧಾರಿತ ಅಪ್ಲಿಕೇಶನ್ ಆಗಿದೆ.",
            "Live weather information for farming.": "ಕೃಷಿಗಾಗಿ ಪ್ರಸ್ತುತ ಹವಾಮಾನ ಮಾಹಿತಿ.",
            "Soil moisture-based irrigation guidance.": "ಮಣ್ಣಿನ ತೇವಾಂಶ ಆಧಾರಿತ ನೀರಾವರಿ ಮಾರ್ಗದರ್ಶನ.",
            "Basic crop recommendations.": "ಮೂಲಭೂತ ಬೆಳೆ ಶಿಫಾರಸುಗಳು.",
            "Crop symptom information and guidance.": "ಬೆಳೆ ಲಕ್ಷಣ ಮಾಹಿತಿ ಮತ್ತು ಮಾರ್ಗದರ್ಶನ.",
            "Basic soil pH and nutrient information.": "ಮಣ್ಣಿನ pH ಮತ್ತು ಪೋಷಕಾಂಶಗಳ ಮಾಹಿತಿ.",
            "Personal farmer account information.": "ವೈಯಕ್ತಿಕ ರೈತರ ಖಾತೆ ಮಾಹಿತಿ.",
            "Smart Agriculture Solution | AIML Community Project": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರ | AIML ಕಮ್ಯೂನಿಟಿ ಪ್ರಾಜೆಕ್ಟ್",
            "Technology for Sustainable Agriculture 🌱": "ಸುಸ್ಥಿರ ಕೃಷಿಗಾಗಿ ತಂತ್ರಜ್ಞಾನ 🌱",
            "Pesticide Advisory System": "ಕೀಟನಾಶಕ ಸಲಹಾ ವ್ಯವಸ್ಥೆ",
            "Identify crop concerns and explore safer pest-management guidance.": "ಬೆಳೆಯ ಸಮಸ್ಯೆಗಳನ್ನು ಗುರುತಿಸಿ ಮತ್ತು ಸುರಕ್ಷಿತ ಕೀಟ ನಿರ್ವಹಣಾ ಮಾರ್ಗದರ್ಶನವನ್ನು ಅನ್ವೇಷಿಸಿ.",
            "Your uploaded image will appear here.": "ನೀವು ಅಪ್‌ಲೋಡ್ ಮಾಡಿದ ಚಿತ್ರ ಇಲ್ಲಿ ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತದೆ.",
            "Enter your soil test values to view soil guidance.": "ಮಣ್ಣಿನ ಮಾರ್ಗದರ್ಶನವನ್ನು ವೀಕ್ಷಿಸಲು ನಿಮ್ಮ ಮಣ್ಣು ಪರೀಕ್ಷೆ ಮೌಲ್ಯಗಳನ್ನು ನಮೂದಿಸಿ.",
            "Get Soil Guidance": "ಮಣ್ಣಿನ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
            "Crop Health Dashboard": "ಬೆಳೆ ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
            "Monitor your crop condition.": "ನಿಮ್ಮ ಬೆಳೆಯ ಸ್ಥಿತಿಯನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
            "Pest Monitoring": "ಕೀಟ ಮೇಲ್ವಿಚಾರಣೆ",
            "Not Checked": "ಪರಿಶೀಲಿಸಲಾಗಿಲ್ಲ",
            "Check Crop Health": "ಬೆಳೆ ಆರೋಗ್ಯ ಪರಿಶೀಲಿಸಿ",
            "Seedling": "ಮೊಳಕೆ ಹಂತ",
            "Vegetative": "ಸಸ್ಯ ಬೆಳವಣಿಗೆ",
            "Flowering": "ಹೂಬಿಡುವ ಹಂತ",
            "Fruiting / Harvest stage": "ಕಾಯಿಬಿಡುವ / ಕೊಯ್ಲು ಹಂತ",
            "Tomato": "ಟೊಮೆಟೊ",
            "Rice": "ಅಕ್ಕಿ / ಭತ್ತ",
            "Maize": "ಜೋಳ",
            "Cotton": "ಹತ್ತಿ",
            "Other Vegetables": "ಇತರ ತರಕಾರಿಗಳು",
            "Symptoms:": "ಲಕ್ಷಣಗಳು:",
            "Management:": "ನಿರ್ವಹಣೆ:",
            "Organic Control:": "ಸಾವಯವ ನಿಯಂತ್ರಣ:",
            "Prevention:": "ತಡೆಗಟ್ಟುವಿಕೆ:",
            "Crop Health Summary": "ಬೆಳೆ ಆರೋಗ್ಯ ಸಾರಾಂಶ",
            "Crop Image Analysis": "ಬೆಳೆ ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ",
            "-- Select Crop First --": "-- ಮೊದಲು ಬೆಳೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ --",
            "About Our Project 🌾": "ನಮ್ಮ ಯೋಜನೆಯ ಬಗ್ಗೆ 🌾",
            "Smart Agriculture Solution – Technology for Better Farming": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರ – ಉತ್ತಮ ಕೃಷಿಗಾಗಿ ತಂತ್ರಜ್ಞಾನ",
            "📌 Problem Statement": "📌 ಸಮಸ್ಯೆಯ ಹೇಳಿಕೆ",
            "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.": "ರಾಸಾಯನಿಕ ಕೀಟನಾಶಕಗಳ ದುರ್ಬಳಕೆ ಮತ್ತು ಅಧಿಕ ಬಳಕೆಯಿಂದಾಗಿ ಸಮುದಾಯವು ಗಂಭೀರ ಸವಾಲುಗಳನ್ನು ಎದುರಿಸುತ್ತಿದೆ. ಇದರಿಂದ ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಕುಂಟಿತಗೊಳ್ಳುವುದು, ಬೆಳೆ ಹಾನಿ ಹಾಗೂ ರೈತರು ಮತ್ತು ಗ್ರಾಹಕರಿಗೆ ಆರೋಗ್ಯದ ಅಪಾಯಗಳು ಉಂಟಾಗುತ್ತಿವೆ. ಸುರಕ್ಷಿತ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಕೀಟನಾಶಕ ಬಳಕೆಯ ಬಗ್ಗೆ ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ಬೆಳೆ-ನಿರ್ದಿಷ್ಟ ಮಾರ್ಗದರ್ಶನದ ಕೊರತೆಯಿದೆ.",
            "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.": "ಬೆಳೆಯ ಪ್ರಕಾರ, ಕೀಟಗಳ ಗುರುತಿಸುವಿಕೆ ಮತ್ತು ಸ್ಥಳೀಯ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ಕೀಟನಾಶಕ ಆಯ್ಕೆ ಮತ್ತು ಪ್ರಮಾಣದ ಕುರಿತು ನಿಖರವಾದ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸುವ ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಸಲಹಾ ವ್ಯವಸ್ಥೆಯನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು ಈ ಯೋಜನೆಯ ಗುರಿಯಾಗಿದೆ.",
            "🎯 Project Objectives": "🎯 ಯೋಜನೆಯ ಉದ್ದೇಶಗಳು",
            "Reduce Overuse of Pesticides": "ಕೀಟನಾಶಕಗಳ ಅಧಿಕ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು",
            "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.": "ಅಧಿಕ ಬಳಕೆಯನ್ನು ತಡೆಯಲು ನಿಖರವಾದ, ಬೆಳೆ-ನಿರ್ದಿಷ್ಟ ಕೀಟನಾಶಕ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸಿ.",
            "Improve Crop Health and Yield": "ಬೆಳೆ ಆರೋಗ್ಯ ಮತ್ತು ಇಳುವರಿಯನ್ನು ಸುಧಾರಿಸುವುದು",
            "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.": "ಬೆಳೆ ಹಾನಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ಉತ್ಪಾದಕತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಸರಿಯಾದ ಕೀಟನಾಶಕ ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ಆಯ್ಕೆ ಮಾಡಲು ರೈತರಿಗೆ ಸಹಾಯ ಮಾಡಿ.",
            "Promote Safe and Sustainable Farming": "ಸುರಕ್ಷಿತ ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು",
            "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.": "ಪರಿಸರ ಸ್ನೇಹಿ ಪದ್ಧತಿಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಿ ಮತ್ತು ರೈತರು, ಗ್ರಾಹಕರು ಹಾಗೂ ಪರಿಸರ ವ್ಯವಸ್ಥೆಗೆ ಆರೋಗ್ಯದ ಅಪಾಯಗಳನ್ನು ಕಡಿಮೆ ಮಾಡಿ.",
            "💡 Proposed Solution": "💡 ಪ್ರಸ್ತಾಪಿತ ಪರಿಹಾರ",
            "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard.": "ನಮ್ಮ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರವು ರೈತರಿಗೆ ಕೃಷಿ ಮಾಹಿತಿಯೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್ ಆಗಿದೆ. ಇದು ಹವಾಮಾನ ನವೀಕರಣಗಳು, ನೀರಾವರಿ ಮಾರ್ಗದರ್ಶನ, ಬೆಳೆ ಶಿಫಾರಸುಗಳು, ಮಣ್ಣಿನ ಮಾಹಿತಿ ಮತ್ತು ಸರಳ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಮೂಲಕ ಮೂಲಭೂತ ಕೀಟ ಲಕ್ಷಣ ಮಾರ್ಗದರ್ಶನವನ್ನು ಒಳಗೊಂಡಿದೆ."
        },
        hi: {
            "Language": "भाषा",
            "Dashboard": "डैशबोर्ड",
            "Farmer Dashboard": "किसान डैशबोर्ड",
            "MAIN MENU": "मुख्य मेनू",
            "ACCOUNT": "खाता",
            "Weather": "मौसम",
            "Irrigation": "सिंचाई",
            "Crop Guide": "फसल मार्गदर्शिका",
            "Pest Management": "कीट प्रबंधन",
            "Soil Health": "मिट्टी का स्वास्थ्य",
            "Pesticide Advisory": "कीटनाशक सलाह",
            "My Profile": "मेरी प्रोफ़ाइल",
            "Home": "होम",
            "SMART AGRICULTURE PLATFORM": "स्मार्ट कृषि प्लेटफ़ॉर्म",
            "Farmer Account": "किसान खाता",
            "Farm Management": "कृषि प्रबंधन",
            "Welcome to Smart Farming!": "स्मार्ट खेती में आपका स्वागत है!",
            "Manage your crops, monitor soil, and make informed farming decisions.": "अपनी फसलों का प्रबंधन करें, मिट्टी की निगरानी करें और सोच-समझकर खेती के निर्णय लें।",
            "Temperature": "तापमान",
            "Humidity": "आर्द्रता",
            "Rainfall": "वर्षा",
            "Farm Management Tools": "कृषि प्रबंधन उपकरण",
            "Use the tools below to monitor your farm.": "अपने खेत की निगरानी के लिए नीचे दिए गए उपकरणों का उपयोग करें।",
            "Live Weather": "लाइव मौसम",
            "Current weather conditions": "वर्तमान मौसम की स्थिति",
            "Location: Bengaluru": "स्थान: बेंगलुरु",
            "Refresh Weather": "मौसम रीफ़्रेश करें",
            "Smart Irrigation": "स्मार्ट सिंचाई",
            "Check your soil moisture": "मिट्टी की नमी जाँचें",
            "Soil Moisture (%)": "मिट्टी की नमी (%)",
            "Enter moisture (0-100)": "नमी दर्ज करें (0-100)",
            "Check Irrigation": "सिंचाई जाँचें",
            "Select Crop": "फसल चुनें",
            "Select Pest": "कीट चुनें",
            "Get Advisory 🌱": "सलाह प्राप्त करें 🌱",
            "Logout": "लॉगआउट",
            "Login": "लॉगिन",
            "Create Account": "खाता बनाएँ",
            "About Project": "परियोजना के बारे में",
            "Features": "विशेषताएँ",
            "About Our Project": "हमारी परियोजना के बारे में",
            "Our Features": "हमारी विशेषताएँ",
            "Problem Statement": "समस्या विवरण",
            "Project Objectives": "परियोजना के उद्देश्य",
            "Proposed Solution": "प्रस्तावित समाधान",
            "Crop & Pest Details": "फसल और कीट का विवरण",
            "Choose crop": "फसल चुनें",
            "Choose stage": "चरण चुनें",
            "Location (Village / District)": "स्थान (गाँव / ज़िला)",
            "Upload Pest / Crop Image": "कीट / फसल की तस्वीर अपलोड करें",
            "Analyze Crop Image 🔍": "फसल की तस्वीर का विश्लेषण करें 🔍",
            "Crop Growth Stage": "फसल विकास चरण",
            "Important Safety Notice": "महत्वपूर्ण सुरक्षा सूचना",
            "Fertilizer Calculator": "उर्वरक कैलकुलेटर",
            "Grow smarter": "समझदारी से खेती करें",
            "Make farming more sustainable every day.": "हर दिन खेती को अधिक टिकाऊ बनाएँ।",
            "Crop Recommendation": "फसल सिफ़ारिश",
            "Find suitable crops": "उपयुक्त फसलें खोजें",
            "Soil Type": "मिट्टी का प्रकार",
            "Select Soil": "मिट्टी चुनें",
            "Clay Soil": "चिकनी मिट्टी",
            "Loamy Soil": "दोमट मिट्टी",
            "Sandy Soil": "बलुई मिट्टी",
            "Black Soil": "काली मिट्टी",
            "Water Availability": "जल की उपलब्धता",
            "Select Water": "जल उपलब्धता चुनें",
            "High": "अधिक",
            "Medium": "मध्यम",
            "Low": "कम",
            "Recommend Crop": "फसल सिफ़ारिश करें",
            "Pest & disease guidance": "कीट एवं रोग मार्गदर्शन",
            "Get general pest guidance": "सामान्य कीट मार्गदर्शन प्राप्त करें",
            "Observed Symptoms": "देखे गए लक्षण",
            "Select Symptom": "लक्षण चुनें",
            "Yellow Leaves": "पीली पत्तियाँ",
            "Holes in Leaves": "पत्तियों में छेद",
            "Leaf Spots": "पत्तियों पर धब्बे",
            "Wilting": "मुरझाना",
            "Get Guidance": "मार्गदर्शन प्राप्त करें",
            "Review soil test values": "मिट्टी परीक्षण मानों की समीक्षा करें",
            "Soil pH": "मिट्टी का पीएच (pH)",
            "Enter soil pH": "मिट्टी का पीएच दर्ज करें",
            "Nitrogen (N)": "नाइट्रोजन (N)",
            "Enter N value": "N का मान दर्ज करें",
            "Phosphorus (P)": "फास्फोरस (P)",
            "Enter P value": "P का मान दर्ज करें",
            "Potassium (K)": "पोटेशियम (K)",
            "Enter K value": "K का मान दर्ज करें",
            "Check Soil": "मिट्टी जाँचें",
            "Farmer Profile": "किसान प्रोफ़ाइल",
            "Your account information": "आपकी खाता जानकारी",
            "View Profile": "प्रोफ़ाइल देखें",
            "Smart Agriculture Solution": "स्मार्ट कृषि समाधान",
            "Technology for Better Farming": "बेहतर खेती के लिए तकनीक",
            "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.": "स्मार्ट तकनीक, मौसम की जानकारी, सिंचाई मार्गदर्शन और फसल सिफ़ारिशों के साथ किसानों को सशक्त बनाना.",
            "Get Started 🌾": "शुरू करें 🌾",
            "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.": "स्मार्ट कृषि समाधान किसानों को उपयोगी कृषि जानकारी और बुद्धिमान कृषि मार्गदर्शन प्रदान करने के लिए डिज़ाइन किया गया एक तकनीक-आधारित एप्लिकेशन है।",
            "Live weather information for farming.": "खेती के लिए लाइव मौसम की जानकारी।",
            "Soil moisture-based irrigation guidance.": "मिट्टी की नमी पर आधारित सिंचाई मार्गदर्शन।",
            "Basic crop recommendations.": "बुनियादी फसल सिफ़ारिशें।",
            "Crop symptom information and guidance.": "फसल लक्षण जानकारी और मार्गदर्शन।",
            "Basic soil pH and nutrient information.": "बुनियादी मिट्टी पीएच और पोषक तत्व जानकारी।",
            "Personal farmer account information.": "व्यक्तिगत किसान खाता जानकारी।",
            "Smart Agriculture Solution | AIML Community Project": "स्मार्ट कृषि समाधान | AIML कम्युनिटी प्रोजेक्ट",
            "Technology for Sustainable Agriculture 🌱": "टिकाऊ कृषि के लिए तकनीक 🌱",
            "Pesticide Advisory System": "कीटनाशक सलाहकार प्रणाली",
            "Identify crop concerns and explore safer pest-management guidance.": "फसल की समस्याओं की पहचान करें और सुरक्षित कीट-प्रबंधन मार्गदर्शन प्राप्त करें।",
            "Your uploaded image will appear here.": "आपकी अपलोड की गई तस्वीर यहाँ दिखाई देगी।",
            "Enter your soil test values to view soil guidance.": "मिट्टी का मार्गदर्शन देखने के लिए अपने मिट्टी परीक्षण मान दर्ज करें।",
            "Get Soil Guidance": "मिट्टी मार्गदर्शन प्राप्त करें",
            "Crop Health Dashboard": "फसल स्वास्थ्य डैशबोर्ड",
            "Monitor your crop condition.": "अपनी फसल की स्थिति की निगरानी करें।",
            "Pest Monitoring": "कीट निगरानी",
            "Not Checked": "जाँच नहीं की गई",
            "Check Crop Health": "फसल स्वास्थ्य जाँचें",
            "Seedling": "अंकुरण",
            "Vegetative": "वानस्पतिक",
            "Flowering": "फूल आना",
            "Fruiting / Harvest stage": "फल लगना / कटाई चरण",
            "Tomato": "टमाटर",
            "Rice": "चावल",
            "Maize": "मक्का",
            "Cotton": "कपास",
            "Other Vegetables": "अन्य सब्जियां",
            "Symptoms:": "लक्षण:",
            "Management:": "प्रबंधन:",
            "Organic Control:": "जैविक नियंत्रण:",
            "Prevention:": "रोकथाम:",
            "Crop Health Summary": "फसल स्वास्थ्य सारांश",
            "Crop Image Analysis": "फसल छवि विश्लेषण",
            "-- Select Crop First --": "-- पहले फसल चुनें --",
            "About Our Project 🌾": "हमारी परियोजना के बारे में 🌾",
            "Smart Agriculture Solution – Technology for Better Farming": "स्मार्ट कृषि समाधान – बेहतर खेती के लिए तकनीक",
            "📌 Problem Statement": "📌 समस्या विवरण",
            "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.": "रासायनिक कीटनाशकों के दुरुपयोग और अत्यधिक उपयोग के कारण समुदाय को गंभीर चुनौतियों का सामना करना पड़ रहा है, जिससे मिट्टी की उर्वरता में कमी, फसल को नुकसान और किसानों व उपभोक्ताओं के लिए स्वास्थ्य जोखिम पैदा हो रहे हैं। सुरक्षित और प्रभावी कीटनाशक उपयोग पर विश्वसनीय और फसल-विशिष्ट मार्गदर्शन तक सीमित पहुँच है।",
            "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.": "इस परियोजना का उद्देश्य एक उपयोगकर्ता-अनुकूल सलाहकार प्रणाली विकसित करना है जो फसल के प्रकार, कीट पहचान और स्थानीय स्थितियों के आधार पर कीटनाशक चयन और खुराक पर सटीक सिफ़ारिशें प्रदान करती है, जिससे टिकाऊ और सुरक्षित खेती के तरीकों को बढ़ावा मिलता है।",
            "🎯 Project Objectives": "🎯 परियोजना के उद्देश्य",
            "Reduce Overuse of Pesticides": "कीटनाशकों का अत्यधिक उपयोग कम करें",
            "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.": "अत्यधिक उपयोग को कम करने के लिए सटीक, फसल-विशिष्ट कीटनाशक सिफ़ारिशें प्रदान करें।",
            "Improve Crop Health and Yield": "फसल स्वास्थ्य और उपज में सुधार करें",
            "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.": "किसानों को सही कीटनाशक और खुराक चुनने में मदद करें, जिससे फसल का नुकसान कम हो और उत्पादकता बढ़े।",
            "Promote Safe and Sustainable Farming": "सुरक्षित और टिकाऊ खेती को बढ़ावा दें",
            "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.": "पर्यावरण के अनुकूल प्रथाओं को प्रोत्साहित करें और किसानों, उपभोक्ताओं और पारिस्थितिकी तंत्र के लिए स्वास्थ्य जोखिमों को कम करें।",
            "💡 Proposed Solution": "💡 प्रस्तावित समाधान",
            "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard.": "हमारा स्मार्ट कृषि समाधान एक वेब एप्लिकेशन है जिसे किसानों को कृषि संबंधी जानकारी में सहायता करने के लिए डिज़ाइन किया गया है। इसमें एक सरल डैशबोर्ड के माध्यम से मौसम के अपडेट, सिंचाई मार्गदर्शन, फसल सिफ़ारिशें, मिट्टी की जानकारी और बुनियादी कीट लक्षण मार्गदर्शन शामिल हैं।"
        },
        te: {
            "Language": "భాష",
            "Dashboard": "డాష్‌బోర్డ్",
            "Farmer Dashboard": "రైతు డాష్‌బోర్డ్",
            "MAIN MENU": "ప్రధాన మెనూ",
            "ACCOUNT": "ఖాతా",
            "Weather": "వాతావరణం",
            "Irrigation": "నీటిపారుదల",
            "Crop Guide": "పంట మార్గదర్శి",
            "Pest Management": "తెగుళ్ల నిర్వహణ",
            "Soil Health": "నేల ఆరోగ్యం",
            "Pesticide Advisory": "పురుగుమందుల సలహా",
            "My Profile": "నా ప్రొఫైల్",
            "Home": "హోమ్",
            "SMART AGRICULTURE PLATFORM": "స్మార్ట్ వ్యవసాయ వేదిక",
            "Farmer Account": "రైతు ఖాతా",
            "Farm Management": "వ్యవసాయ నిర్వహణ",
            "Welcome to Smart Farming!": "స్మార్ట్ వ్యవసాయానికి స్వాగతం!",
            "Manage your crops, monitor soil, and make informed farming decisions.": "మీ పంటలను నిర్వహించండి, నేలను పర్యవేక్షించండి మరియు సమాచారంతో కూడిన వ్యవసాయ నిర్ణయాలు తీసుకోండి.",
            "Temperature": "ఉష్ణోగ్రత",
            "Humidity": "తేమ",
            "Rainfall": "వర్షపాతం",
            "Farm Management Tools": "వ్యవసాయ నిర్వహణ సాధనాలు",
            "Use the tools below to monitor your farm.": "మీ పొలాన్ని పర్యవేక్షించడానికి క్రింది సాధనాలను ఉపయోగించండి.",
            "Live Weather": "ప్రత్యక్ష వాతావరణం",
            "Current weather conditions": "ప్రస్తుత వాతావరణ పరిస్థితులు",
            "Location: Bengaluru": "ప్రాంతం: బెంగళూరు",
            "Refresh Weather": "వాతావరణాన్ని రిఫ్రెష్ చేయండి",
            "Smart Irrigation": "స్మార్ట్ నీటిపారుదల",
            "Check your soil moisture": "నేల తేమను తనిఖీ చేయండి",
            "Soil Moisture (%)": "నేల తేమ (%)",
            "Enter moisture (0-100)": "తేమను నమోదు చేయండి (0-100)",
            "Check Irrigation": "నీటిపారుదలను తనిఖీ చేయండి",
            "Select Crop": "పంటను ఎంచుకోండి",
            "Select Pest": "తెగులును ఎంచుకోండి",
            "Get Advisory 🌱": "సలహా పొందండి 🌱",
            "Logout": "లాగ్‌అవుట్",
            "Login": "లాగిన్",
            "Create Account": "ఖాతా సృష్టించండి",
            "About Project": "ప్రాజెక్ట్ గురించి",
            "Features": "ఫీచర్లు",
            "About Our Project": "మా ప్రాజెక్ట్ గురించి",
            "Our Features": "మా ఫీచర్లు",
            "Problem Statement": "సమస్య వివరణ",
            "Project Objectives": "ప్రాజెక్ట్ లక్ష్యాలు",
            "Proposed Solution": "ప్రతిపాదిత పరిష్కారం",
            "Crop & Pest Details": "పంట మరియు తెగులు వివరాలు",
            "Choose crop": "పంటను ఎంచుకోండి",
            "Choose stage": "దశను ఎంచుకోండి",
            "Location (Village / District)": "ప్రాంతం (గ్రామం / జిల్లా)",
            "Upload Pest / Crop Image": "తెగులు / పంట చిత్రాన్ని అప్‌लोड చేయండి",
            "Analyze Crop Image 🔍": "పంట చిత్రాన్ని విశ్లేషించండి 🔍",
            "Crop Growth Stage": "పంట పెరుగుదల దశ",
            "Important Safety Notice": "ముఖ్యమైన భద్రతా సూచన",
            "Fertilizer Calculator": "ఎరువుల కాలిక్యులేటర్",
            "Grow smarter": "తెలివిగా సాగు చేయండి",
            "Make farming more sustainable every day.": "ప్రతిరోజూ వ్యవసాయాన్ని మరింత స్థిరంగా చేయండి",
            "Crop Recommendation": "పంట సిఫార్సు",
            "Find suitable crops": "తగిన పంటలను కనుగొనండి",
            "Soil Type": "నేల రకం",
            "Select Soil": "నేలను ఎంచుకోండి",
            "Clay Soil": "బంక మಣ್ಣು",
            "Loamy Soil": "ండ్రు నేల",
            "Sandy Soil": "ఇసుక నేల",
            "Black Soil": "నల్ల రేగడి నేల",
            "Water Availability": "నీటి లభ్యత",
            "Select Water": "నీటిని ఎంచుకోండి",
            "High": "ఎక్కువ",
            "Medium": "మధ్యస్థ",
            "Low": "తక్కువ",
            "Recommend Crop": "పంటను సిఫార్సు చేయండి",
            "Pest & disease guidance": "తెగుళ్లు మరియు రోగాల మార్గదర్శకం",
            "Get general pest guidance": "సాధారణ తెగుళ్ల మార్గదర్శకం పొందండి",
            "Observed Symptoms": "గమనించిన లక్షణాలు",
            "Select Symptom": "లక్షణం ఎంచుకోండి",
            "Yellow Leaves": "పసుపు ఆకులు",
            "Holes in Leaves": "ఆకులలో రంధ్రాలు",
            "Leaf Spots": "ఆకుల మచ్చలు",
            "Wilting": "వాడిపోవడం",
            "Get Guidance": "మార్గదర్శకం పొందండి",
            "Review soil test values": "నేల పరీక్ష విలువలను సమీక్షించండి",
            "Soil pH": "నేల pH",
            "Enter soil pH": "నేల pH నమోదు చేయండి",
            "Nitrogen (N)": "నత్రಜನಕ (N)",
            "Enter N value": "N విలువ నమోదు చేయండి",
            "Phosphorus (P)": "భాస్వరం (P)",
            "Enter P value": "P విలువ నమోదు చేయండి",
            "Potassium (K)": "పొటాషియం (K)",
            "Enter K value": "K విలువ నమోదు చేయండి",
            "Check Soil": "నేలను తనిఖీ చేయండి",
            "Farmer Profile": "రైతు ప్రొఫైల్",
            "Your account information": "మీ ఖాతా సమాచారం",
            "View Profile": "ప్రొఫైల్ చూడండి",
            "Smart Agriculture Solution": "స్మార్ట్ వ్యవసాయ పరిష్కారం",
            "Technology for Better Farming": "మెరుగైన వ్యవసాయం కోసం సాంకేతికత",
            "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.": "స్మార్ట్ టెక్నాలజీ, వాతావరణ సమాచారం, నీటిపారుదల మార్గదర్శకం మరియు పంట సిఫార్సులతో రైతులకు సాధికారత కల్పించడం.",
            "Get Started 🌾": "ప్రారంభించండి 🌾",
            "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.": "స్మార్ట్ వ్యవసాయ పరిష్కారం అనేది రైతులకు ఉపయోగకరమైన వ్యవసాయ సమాచారం మరియు మేధస్సు గల వ్యవసాయ మార్గదర్శకాలను అందించడానికి రూపొందించబడిన సాంకేతికత ఆధారిత అప్లికేషన్.",
            "Live weather information for farming.": "వ్యవసాయం కోసం ప్రత్యక్ష వాతావరణ సమాచారం.",
            "Soil moisture-based irrigation guidance.": "నేల తేమ ఆధారిత నీటిపారుదల మార్గదర్శకం.",
            "Basic crop recommendations.": "ప్రాథమిక పంట సిఫార్సులు.",
            "Crop symptom information and guidance.": "పంట లక్షణ సమాచారం మరియు మార్గదర్శకం.",
            "Basic soil pH and nutrient information.": "ప్రాథమిక నేల pH మరియు పోషకాల సమాచారం.",
            "Personal farmer account information.": "వ్యక్తిగత రైతు ఖాతా సమాచారం.",
            "Smart Agriculture Solution | AIML Community Project": "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಪರಿಹಾರ | AIML ಕಮ್ಯೂನಿಟಿ ಪ್ರಾಜೆಕ್ಟ್",
            "Technology for Sustainable Agriculture 🌱": "స్థిరమైన వ్యవసాయం కోసం సాంకేతికత 🌱",
            "Pesticide Advisory System": "పురుగుమందుల సలహా వ్యవస్థ",
            "Identify crop concerns and explore safer pest-management guidance.": "పంట సమస్యలను గుర్తించండి మరియు సురక్షితమైన తెగుళ్ల నిర్వహణ మార్గదర్శకాలను అన్ವೇಷించండి.",
            "Your uploaded image will appear here.": "మీరు అప్‌లోడ్ చేసిన చిత్రం ఇక్కడ కనిపిస్తుంది.",
            "Enter your soil test values to view soil guidance.": "నేల మార్గదర్శకాలను వీక్షించడానికి మీ నేల పరీక్ష విలువలను నమోదు చేయండి.",
            "Get Soil Guidance": "నేల మార్గదర్శకం పొందండి",
            "Crop Health Dashboard": "పంట ఆరోగ్య డాష్‌బోర్డ్",
            "Monitor your crop condition.": "మీ పంట పరిస్థితిని పర్యవేక్షించండి.",
            "Pest Monitoring": "తెగుళ్ల పర్యవేక్షణ",
            "Not Checked": "తనిఖీ చేయబడలేదు",
            "Check Crop Health": "పంట ఆరోగ్యాన్ని తనిఖీ చేయండి",
            "Seedling": "మొక్క దశ",
            "Vegetative": "శాఖీయ దశ",
            "Flowering": "పూత దశ",
            "Fruiting / Harvest stage": "కాయ కాసే / కోత దశ",
            "Tomato": "టొమాటో",
            "Rice": "వరి",
            "Maize": "మొక్కజొన్న",
            "Cotton": "పత్తి",
            "Other Vegetables": "ఇతర కూరగాయలు",
            "Symptoms:": "లక్షణాలు:",
            "Management:": "నిర్వహణ:",
            "Organic Control:": "సేంద్రీయ నియంత్రణ:",
            "Prevention:": "నివారణ:",
            "Crop Health Summary": "పంట ఆరోగ్య సారాంశం",
            "Crop Image Analysis": "పంట చిత్ర విశ్లేషణ",
            "-- Select Crop First --": "-- ముందుగా పంటను ఎంచుకోండి --",
            "About Our Project 🌾": "మా ప్రాజెక్ట్ గురించి 🌾",
            "Smart Agriculture Solution – Technology for Better Farming": "స్మార్ట్ వ్యవసాయ పరిష్కారం – మెరుగైన వ్యవసాయం కోసం సాంకేతికత",
            "📌 Problem Statement": "📌 సమస్య వివరణ",
            "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.": "రసాయన పురుగుమందుల దుర్వినియోగం మరియు అతిగా వాడకం కారణంగా సంఘం తీవ్రమైన సవాళ్లను ఎదుర్కొంటోంది, ఇది నేలసార తగ్గిపోవడానికి, పంట నష్టానికి మరియు రైతులు మరియు వినియోగదారులకు ఆరోగ్య ముప్పులకు దారితీస్తుంది. సురక్షితమైన మరియు సమర్థవంతమైన పురుగుమందుల వాడకంపై నమ్మదగిన మరియు పంట-నిర్దిష్ట మార్గదర్శకత్వం పరిమితంగా అందుబాటులో ఉంది.",
            "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.": "పంట రకం, తెగులు గుర్తింపు మరియు స్థానిక పరిస్థితుల ఆధారంగా పురుగుమందుల ఎంపిక మరియు మోతాదుపై ఖచ్చితమైన సిఫార్సులను అందించే వినియోగదారు-స్నేహపూర్వక సలహా వ్యవస్థను అభివృద్ధి చేయడం ఈ ప్రాజెక్ట్ యొక్క లక్ష్యం.",
            "🎯 Project Objectives": "🎯 ప్రాజెక్ట్ లక్ష్యాలు",
            "Reduce Overuse of Pesticides": "పురుగుమందుల అతివాడకాన్ని తగ్గించండి",
            "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.": "అధిక వినియోగాన్ని తగ్గించడానికి ఖచ్చితమైన, పంట-నిర్దిష్ట పురుగుమందుల సిఫార్సులను అందించండి.",
            "Improve Crop Health and Yield": "పంట ఆరోగ్యం మరియు దిగుబడిని మెరుగుపరచండి",
            "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.": "రైతులు సరైన పురుగుమందు మరియు మోతాదును ఎంచుకోవడానికి సహాయపడండి, పంట నష్టాన్ని తగ్గించండి మరియు ఉత్పత్తిని పెంచండి.",
            "Promote Safe and Sustainable Farming": "సురక్షితమైన మరియు స్థిరమైన వ్యవసాయాన్ని ప్రోత్సహించండి",
            "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.": "పర్యావరణ అనుకూల పద్ధతులను ప్రోత్సహించండి మరియు రైతులు, వినియోగదారులు మరియు పర్యావరణ వ్యవస్థకు ఆరోగ్య ముప్పులను తగ్గించండి.",
            "💡 Proposed Solution": "💡 ప్రతిపాదిత పరిష్కారం",
            "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard.": "మా స్మార్ట్ వ్యవసాయ పరిష్కారం అనేది రైతులకు వ్యవసాయ సమాచారంతో సహాయపడటానికి రూపొందించబడిన వెబ్ అప్లికేషన్. ఇది సాధారణ డాష్‌బోర్డ్ ద్వారా వాతావరణ నవీకరణలు, నీటిపారుదల మార్గదర్శకం, పంట సిఫార్సులు, నేల సమాచారం మరియు ప్రాథమిక తెగులు లక్షణ మార్గదర్శకాలను కలిగి ఉంటుంది."
        },
        ta: {
            "Language": "மொழி",
            "Dashboard": "டாஷ்போர்டு",
            "Farmer Dashboard": "விவசாயி டாஷ்போர்டு",
            "MAIN MENU": "முதன்மை பட்டியல்",
            "ACCOUNT": "கணக்கு",
            "Weather": "வானிலை",
            "Irrigation": "நீர்ப்பாசனம்",
            "Crop Guide": "பயிர் வழிகாட்டி",
            "Pest Management": "பூச்சி மேலாண்மை",
            "Soil Health": "மண் ஆரோக்கியம்",
            "Pesticide Advisory": "பூச்சிக்கொல்லி ஆலோசனை",
            "My Profile": "என் சுயவிவரம்",
            "Home": "முகப்பு",
            "SMART AGRICULTURE PLATFORM": "ஸ்மார்ட் விவசாயத் தளம்",
            "Farmer Account": "விவசாயி கணக்கு",
            "Farm Management": "பண்ணை மேலாண்மை",
            "Welcome to Smart Farming!": "ஸ்மார்ட் விவசாயத்திற்கு வரவேற்கிறோம்!",
            "Manage your crops, monitor soil, and make informed farming decisions.": "உங்கள் பயிர்களை நிர்வகிக்கவும், மண்ணைக் கண்காணிக்கவும், தகவலறிந்த விவசாய முடிவுகளை எடுக்கவும்.",
            "Temperature": "வெப்பநிலை",
            "Humidity": "ஈரப்பதம்",
            "Rainfall": "மழைப்பொழிவு",
            "Farm Management Tools": "பண்ணை மேலாண்மைக் கருவிகள்",
            "Use the tools below to monitor your farm.": "உங்கள் பண்ணையைக் கண்காணிக்க கீழே உள்ள கருவிகளைப் பயன்படுத்தவும்.",
            "Live Weather": "நேரடி வானிலை",
            "Current weather conditions": "தற்போதைய வானிலை நிலைகள்",
            "Location: Bengaluru": "இடம்: பெங்களூரு",
            "Refresh Weather": "வானிலையைப் புதுப்பிக்கவும்",
            "Smart Irrigation": "ஸ்மார்ட் நீர்ப்பாசனம்",
            "Check your soil moisture": "மண் ஈரப்பதத்தைச் சரிபார்க்கவும்",
            "Soil Moisture (%)": "மண் ஈரப்பதம் (%)",
            "Enter moisture (0-100)": "ஈரப்பதத்தை உள்ளிடவும் (0-100)",
            "Check Irrigation": "நீர்ப்பாசனத்தைச் சரிபார்க்கவும்",
            "Select Crop": "பயிரைத் தேர்ந்தெடுக்கவும்",
            "Select Pest": "பூச்சியைத் தேர்ந்தெடுக்கவும்",
            "Get Advisory 🌱": "ஆலோசனை பெறுங்கள் 🌱",
            "Logout": "வெளியேறு",
            "Login": "உள்நுழைவு",
            "Create Account": "கணக்கை உருவாக்கு",
            "About Project": "திட்டம் பற்றி",
            "Features": "அம்சங்கள்",
            "About Our Project": "எங்கள் திட்டம் பற்றி",
            "Our Features": "எங்கள் அம்சங்கள்",
            "Problem Statement": "சிக்கல் விளக்கம்",
            "Project Objectives": "திட்ட நோக்கங்கள்",
            "Proposed Solution": "முன்மொழியப்பட்ட தீர்வு",
            "Crop & Pest Details": "பயிர் மற்றும் பூச்சி விவரங்கள்",
            "Choose crop": "பயிரைத் தேர்ந்தெடுக்கவும்",
            "Choose stage": "நிலையைத் தேர்ந்தெடுக்கவும்",
            "Location (Village / District)": "இடம் (கிராமம் / மாவட்டம்)",
            "Upload Pest / Crop Image": "பூச்சி / பயிர் படத்தைப் பதிவேற்றவும்",
            "Analyze Crop Image 🔍": "பயிர் படத்தைப் பகுப்பாய்வு செய்யவும் 🔍",
            "Crop Growth Stage": "பயிர் வளர்ச்சி நிலை",
            "Important Safety Notice": "முக்கிய பாதுகாப்பு அறிவிப்பு",
            "Fertilizer Calculator": "உரக் கணிப்பான்",
            "Grow smarter": "அறிவார்ந்த முறையில் பயிரிடுங்கள்",
            "Make farming more sustainable every day.": "விவசாயத்தை மேலும் நிலையானதாக மாற்றுங்கள்",
            "Crop Recommendation": "பயிர் பரிந்துரை",
            "Find suitable crops": "உகந்த பயிர்களைக் கண்டறியவும்",
            "Soil Type": "மண் வகை",
            "Select Soil": "மண்ணைத் தேர்ந்தெடுக்கவும்",
            "Clay Soil": "களிமண்",
            "Loamy Soil": "வண்டல் மண்",
            "Sandy Soil": "மணல் மண்",
            "Black Soil": "கருமண்",
            "Water Availability": "நீரின் இருப்பு",
            "Select Water": "நீரைத் தேர்ந்தெடுக்கவும்",
            "High": "அதிகம்",
            "Medium": "நடுத்தரம்",
            "Low": "குறைவு",
            "Recommend Crop": "பயிரைப் பரிந்துரைக்கவும்",
            "Pest & disease guidance": "பூச்சி மற்றும் நோய் வழிகாட்டுதல்",
            "Get general pest guidance": "பொதுவான பூச்சி வழிகாட்டுதலைப் பெறுக",
            "Observed Symptoms": "கண்டறியப்பட்ட அறிகுறிகள்",
            "Select Symptom": "அறிகுறியைத் தேர்ந்தெடுக்கவும்",
            "Yellow Leaves": "மஞ்சள் இலைகள்",
            "Holes in Leaves": "இலைகளில் துளைகள்",
            "Leaf Spots": "இலை புள்ளிகள்",
            "Wilting": "வாடுதல்",
            "Get Guidance": "வழிகாட்டுதலைப் பெறுக",
            "Review soil test values": "மண் பரிசோதனை மதிப்புகளை மதிப்பாய்வு செய்யவும்",
            "Soil pH": "மண் pH",
            "Enter soil pH": "மண் pH ஐ உள்ளிடவும்",
            "Nitrogen (N)": "நைட்ரஜன் (N)",
            "Enter N value": "N மதிப்பை உள்ளிடவும்",
            "Phosphorus (P)": "பாஸ்பரஸ் (P)",
            "Enter P value": "P மதிப்பை உள்ளிடவும்",
            "Potassium (K)": "பொட்டாசியம் (K)",
            "Enter K value": "K மதிப்பை உள்ளிடவும்",
            "Check Soil": "மண்ணைச் சரிபார்க்கவும்",
            "Farmer Profile": "விவசாயி சுயவிவரம்",
            "Your account information": "உங்கள் கணக்கு தகவல்",
            "View Profile": "சுயவிவரத்தைக் காண்க",
            "Smart Agriculture Solution": "ஸ்மார்ட் விவசாய தீர்வு",
            "Technology for Better Farming": "சிறந்த விவசாயத்திற்கான தொழில்நுட்பம்",
            "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.": "ஸ்மார்ட் தொழில்நுட்பம், வானிலை தகவல், நீர்ப்பாசன வழிகாட்டுதல் மற்றும் பயிர் பரிந்துரைகளுடன் விவசாயிகளை மேம்படுத்துதல்.",
            "Get Started 🌾": "தொடங்கவும் 🌾",
            "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.": "ஸ்மார்ட் விவசாய தீர்வு என்பது விவசாயிகளுக்கு பயனுள்ள விவசாய தகவல்கள் மற்றும் நுண்ணறிவுள்ள விவசாய வழிகாட்டுதல்களை வழங்க வடிவமைக்கப்பட்ட தொழில்நுட்ப அடிப்படையிலான பயன்பாடாகும்.",
            "Live weather information for farming.": "விவசாயத்திற்கான நேரடி வானிலை தகவல்.",
            "Soil moisture-based irrigation guidance.": "மண் ஈரப்பதம் அடிப்படையிலான நீர்ப்பாசன வழிகாட்டுதல்.",
            "Basic crop recommendations.": "அடிப்படை பயிர் பரிந்துரைகள்.",
            "Crop symptom information and guidance.": "பயிர் அறிகுறி தகவல் மற்றும் வழிகாட்டுதல்.",
            "Basic soil pH and nutrient information.": "அடிப்படை மண் pH மற்றும் சத்துக்கள் தகவல்.",
            "Personal farmer account information.": "தனிப்பட்ட விவசாயி கணக்கு தகவல்.",
            "Smart Agriculture Solution | AIML Community Project": "ஸ்மார்ட் விவசாய தீர்வு | AIML சமூகம் திட்டம்",
            "Technology for Sustainable Agriculture 🌱": "நிலையான விவசாயத்திற்கான தொழில்நுட்பம் 🌱",
            "Pesticide Advisory System": "பூச்சிக்கொல்லி ஆலோசனை அமைப்பு",
            "Identify crop concerns and explore safer pest-management guidance.": "பயிர் கவலைகளை அடையாளம் கண்டு பாதுகாப்பான பூச்சி மேலாண்மை வழிகாட்டுதலை ஆராயுங்கள்.",
            "Your uploaded image will appear here.": "நீங்கள் பதிவேற்றிய படம் இங்கே தோன்றும்.",
            "Enter your soil test values to view soil guidance.": "மண் வழிகாட்டுதலைக் காண உங்கள் மண் பரிசோதனை மதிப்புகளை உள்ளிடவும்.",
            "Get Soil Guidance": "மண் வழிகாட்டுதலைப் பெறுக",
            "Crop Health Dashboard": "பயிர் ஆரோக்கிய டாஷ்போர்டு",
            "Monitor your crop condition.": "உங்கள் பயிர் நிலையை கண்காணிக்கவும்.",
            "Pest Monitoring": "பூச்சி கண்காணிப்பு",
            "Not Checked": "சரிபார்க்கப்படவில்லை",
            "Check Crop Health": "பயிர் ஆரோக்கியத்தை சரிபார்க்கவும்",
            "Seedling": "நாற்று நிலை",
            "Vegetative": "தழை வளர்ச்சி",
            "Flowering": "பூக்கும் நிலை",
            "Fruiting / Harvest stage": "காய்க்கும் / அறுவடை நிலை",
            "Tomato": "தக்காளி",
            "Rice": "நெல் / அரிசி",
            "Maize": "மக்காச்சோளம்",
            "Cotton": "பருத்தி",
            "Other Vegetables": "பிற காய்கறிகள்",
            "Symptoms:": "அறிகுறிகள்:",
            "Management:": "மேலாண்மை:",
            "Organic Control:": "இயற்கை கட்டுப்பாடு:",
            "Prevention:": "தடுப்பு முறை:",
            "Crop Health Summary": "பயிர் ஆரோக்கிய சுருக்கம்",
            "Crop Image Analysis": "பயிர் பட பகுப்பாய்வு",
            "-- Select Crop First --": "-- முதலில் பயிரைத் தேர்ந்தெடுக்கவும் --",
            "About Our Project 🌾": "எங்கள் திட்டம் பற்றி 🌾",
            "Smart Agriculture Solution – Technology for Better Farming": "ஸ்மார்ட் விவசாய தீர்வு – சிறந்த விவசாயத்திற்கான தொழில்நுட்பம்",
            "📌 Problem Statement": "📌 சிக்கல் விளக்கம்",
            "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.": "வேதியியல் பூச்சிக்கொல்லிகளின் தவறான மற்றும் அதிகப்படியான பயன்பாடு காரணமாக சமூகம் கடுமையான சவால்களை எதிர்கொள்கிறது. இதனால் மண் வளம் குறைதல், பயிர் சேதம் மற்றும் விவசாயிகள் மற்றும் நுகர்வோருக்கு உடல்நல அபாயங்கள் ஏற்படுகின்றன. பாதுகாப்பான மற்றும் பயனுள்ள பூச்சிக்கொல்லி பயன்பாடு குறித்த நம்பகமான மற்றும் பயிர்-குறிப்பிட்ட வழிகாட்டுதல்கள் குறைவாகவே உள்ளன.",
            "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.": "பயிர் வகை, பூச்சி அடையாளம் மற்றும் உள்ளூர் நிலைமைகளின் அடிப்படையில் பூச்சிக்கொல்லி தேர்வு மற்றும் அளவுகள் குறித்த துல்லியமான பரிந்துரைகளை வழங்கும் பயனர் நட்பு ஆலோசனை அமைப்பை உருவாக்குவதை இப்பணி நோக்கமாகக் கொண்டுள்ளது, இது நிலையான மற்றும் பாதுகாப்பான விவசாய நடைமுறைகளை ஊக்குவிக்கிறது.",
            "🎯 Project Objectives": "🎯 திட்ட நோக்கங்கள்",
            "Reduce Overuse of Pesticides": "பூச்சிக்கொல்லிகளின் அதிகப்படியான பயன்பாட்டைக் குறைத்தல்",
            "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.": "அதிகப்படியான பயன்பாட்டைக் குறைக்க துல்லியமான, பயிர்-குறிப்பிட்ட பூச்சிக்கொல்லி பரிந்துரைகளை வழங்கவும்.",
            "Improve Crop Health and Yield": "பயிர் ஆரோக்கியம் மற்றும் விளைச்சலை மேம்படுத்துதல்",
            "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.": "விவசாயிகள் சரியான பூச்சிக்கொல்லி மற்றும் அளவைத் தேர்ந்தெடுக்க உதவுங்கள், பயிர் சேதத்தைக் குறைத்து உற்பத்தித்திறனை அதிகரிக்கவும்.",
            "Promote Safe and Sustainable Farming": "பாதுகாப்பான மற்றும் நிலையான விவசாயத்தை மேம்படுத்துதல்",
            "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.": "சுற்றுச்சூழலுக்கு உகந்த நடைமுறைகளை ஊக்குவிக்கவும் மற்றும் விவசாயிகள், நுகர்வோர் மற்றும் சுற்றுச்சூழல் அமைப்புகளுக்கான உடல்நல அபாயங்களைக் குறைக்கவும்.",
            "💡 Proposed Solution": "💡 முன்மொழியப்பட்ட தீர்வு",
            "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard.": "எங்களின் ஸ்மார்ட் விவசாய தீர்வு என்பது விவசாயிகளுக்கு விவசாயத் தகவல்களுடன் உதவ வடிவமைக்கப்பட்ட ஒரு வலை பயன்பாடாகும். இது வானிலை புதுப்பிப்புகள், நீர்ப்பாசன வழிகாட்டுதல், பயிர் பரிந்துரைகள், மண் தகவல் மற்றும் எளிய டாஷ்போர்டு மூலம் அடிப்படை பூச்சி அறிகுறி வழிகாட்டுதலை உள்ளடக்கியது."
        },
        mr: {
            "Language": "भाषा",
            "Dashboard": "डॅशबोर्ड",
            "Farmer Dashboard": "शेतकरी डॅशबोर्ड",
            "MAIN MENU": "मुख्य मेनू",
            "ACCOUNT": "खाते",
            "Weather": "हवामान",
            "Irrigation": "सिंचन",
            "Crop Guide": "पिक मार्गदर्शक",
            "Pest Management": "कीटक व्यवस्थापन",
            "Soil Health": "माती आरोग्य",
            "Pesticide Advisory": "कीटकनाशक सल्ला",
            "My Profile": "माझी प्रोफाईल",
            "Home": "होम",
            "SMART AGRICULTURE PLATFORM": "स्मार्ट शेती प्लॅटफॉर्म",
            "Farmer Account": "शेतकरी खाते",
            "Farm Management": "शेती व्यवस्थापन",
            "Welcome to Smart Farming!": "स्मार्ट शेतीमध्ये आपले स्वागत आहे!",
            "Manage your crops, monitor soil, and make informed farming decisions.": "आपल्या पिकांचे व्यवस्थापन करा, मातीचे निरीक्षण करा आणि शेतीविषयक योग्य निर्णय घ्या.",
            "Temperature": "तापमान",
            "Humidity": "आर्द्रता",
            "Rainfall": "पाऊस",
            "Farm Management Tools": "शेती व्यवस्थापन साधने",
            "Use the tools below to monitor your farm.": "आपल्या शेताचे निरीक्षण करण्यासाठी खालील साधनांचा वापर करा.",
            "Live Weather": "थेट हवामान",
            "Current weather conditions": "सध्याची हवामान स्थिती",
            "Location: Bengaluru": "स्थान: बेंगळुरू",
            "Refresh Weather": "हवामान रिफ्रेश करा",
            "Smart Irrigation": "स्मार्ट सिंचन",
            "Check your soil moisture": "मातीतील ओलावा तपासा",
            "Soil Moisture (%)": "मातीतील ओलावा (%)",
            "Enter moisture (0-100)": "ओलावा प्रविष्ट करा (0-100)",
            "Check Irrigation": "सिंचन तपासा",
            "Select Crop": "पीक निवडा",
            "Select Pest": "कीटक निवडा",
            "Get Advisory 🌱": "सल्ला मिळवा 🌱",
            "Logout": "लॉगआउट",
            "Login": "लॉगिन",
            "Create Account": "खाते तयार करा",
            "About Project": "प्रकल्पाविषयी",
            "Features": "वैशिष्ट्ये",
            "About Our Project": "आमच्या प्रकल्पाविषयी",
            "Our Features": "आमची वैशिष्ट्ये",
            "Problem Statement": "समस्या विधान",
            "Project Objectives": "प्रकल्पाची उद्दिष्टे",
            "Proposed Solution": "प्रस्तावित उपाय",
            "Crop & Pest Details": "पीक आणि कीटक तपशील",
            "Choose crop": "पीक निवडा",
            "Choose stage": "टप्पा निवडा",
            "Location (Village / District)": "स्थान (गाव / जिल्हा)",
            "Upload Pest / Crop Image": "कीटक / पीक प्रतिमा अपलोड करा",
            "Analyze Crop Image 🔍": "पीक प्रतिमेचे विश्लेषण करा 🔍",
            "Crop Growth Stage": "पीक वाढीचा टप्पा",
            "Important Safety Notice": "महत्त्वाचे सुरक्षा पत्रक",
            "Fertilizer Calculator": "खत कॅल्क्युलेटर",
            "Grow smarter": "हुशारीने शेती करा",
            "Make farming more sustainable every day.": "दररोज शेती अधिक शाश्वत करा",
            "Crop Recommendation": "पीक शिफारस",
            "Find suitable crops": "योग्य पिके शोधा",
            "Soil Type": "मातीचा प्रकार",
            "Select Soil": "माती निवडा",
            "Clay Soil": "चिकणमाती",
            "Loamy Soil": "गाळाची माती",
            "Sandy Soil": "वालुकामय माती",
            "Black Soil": "काळी माती",
            "Water Availability": "पाण्याची उपलब्धता",
            "Select Water": "पाणी निवडा",
            "High": "जास्त",
            "Medium": "मध्यम",
            "Low": "कमी",
            "Recommend Crop": "पीक शिफारस करा",
            "Pest & disease guidance": "कीटक आणि रोग मार्गदर्शन",
            "Get general pest guidance": "सामान्य कीटक मार्गदर्शन मिळवा",
            "Observed Symptoms": "निरीक्षण केलेली लक्षणे",
            "Select Symptom": "लक्षण निवडा",
            "Yellow Leaves": "पिवळी पाने",
            "Holes in Leaves": "पानांमध्ये छिद्रे",
            "Leaf Spots": "पानांवर डाग",
            "Wilting": "कोमेजणे",
            "Get Guidance": "मार्गदर्शन मिळवा",
            "Review soil test values": "माती परीक्षण मूल्यांचे पुनरावलोकन करा",
            "Soil pH": "मातीचा pH",
            "Enter soil pH": "मातीचा pH प्रविष्ट करा",
            "Nitrogen (N)": "नायट्रोजन (N)",
            "Enter N value": "N मूल्य प्रविष्ट करा",
            "Phosphorus (P)": "फॉस्फरस (P)",
            "Enter P value": "P मूल्य प्रविष्ट करा",
            "Potassium (K)": "पोटॅशियम (K)",
            "Enter K value": "K मूल्य प्रविष्ट करा",
            "Check Soil": "माती तपासा",
            "Farmer Profile": "शेतकरी प्रोफाईल",
            "Your account information": "तुमची खाते माहिती",
            "View Profile": "प्रोफाईल पहा",
            "Smart Agriculture Solution": "स्मार्ट शेती उपाय",
            "Technology for Better Farming": "उत्तम शेतीसाठी तंत्रज्ञान",
            "Empowering farmers with smart technology, weather information, irrigation guidance, and crop recommendations.": "स्मार्ट तंत्रज्ञान, हवामानाची माहिती, सिंचन मार्गदर्शन आणि पीक शिफारसींसह शेतकऱ्यांना सक्षम करणे.",
            "Get Started 🌾": "सुरुवात करा 🌾",
            "Smart Agriculture Solution is a technology-based application designed to support farmers with useful farming information and intelligent agricultural guidance.": "स्मार्ट शेती उपाय हा शेतकऱ्यांना उपयुक्त शेती माहिती आणि बुद्धिमान शेती मार्गदर्शन प्रदान करण्यासाठी डिझाइन केलेले तंत्रज्ञान-आधारित अनुप्रयोग आहे.",
            "Live weather information for farming.": "शेतसाठी थेट हवामानाची माहिती.",
            "Soil moisture-based irrigation guidance.": "मातीच्या ओलाव्यावर आधारित सिंचन मार्गदर्शन.",
            "Basic crop recommendations.": "मूलभूत पीक शिफारसी.",
            "Crop symptom information and guidance.": "पीक लक्षण माहिती आणि मार्गदर्शन.",
            "Basic soil pH and nutrient information.": "मूलभूत माती pH आणि अन्नद्रव्य माहिती.",
            "Personal farmer account information.": "वैयक्तिक शेतकरी खाते माहिती.",
            "Smart Agriculture Solution | AIML Community Project": "स्मार्ट शेती उपाय | AIML कम्युनिटी प्रोजेक्ट",
            "Technology for Sustainable Agriculture 🌱": "शाश्वत शेतीसाठी तंत्रज्ञान 🌱",
            "Pesticide Advisory System": "कीटकनाशक सल्लागार प्रणाली",
            "Identify crop concerns and explore safer pest-management guidance.": "पिकाच्या समस्या ओळखा आणि सुरक्षित कीटक-व्यवस्थापन मार्गदर्शन तपासा.",
            "Your uploaded image will appear here.": "तुमची अपलोड केलेली प्रतिमा येथे दिसेल.",
            "Enter your soil test values to view soil guidance.": "मातीचे मार्गदर्शन पाहण्यासाठी तुमचे माती परीक्षण मूल्य प्रविष्ट करा.",
            "Get Soil Guidance": "माती मार्गदर्शन मिळवा",
            "Crop Health Dashboard": "पीक आरोग्य डॅशबोर्ड",
            "Monitor your crop condition.": "तुमच्या पिकाच्या स्थितीचे निरीक्षण करा.",
            "Pest Monitoring": "कीटक निरीक्षण",
            "Not Checked": "तपासले नाही",
            "Check Crop Health": "पीक आरोग्य तपासा",
            "Seedling": "रोपे",
            "Vegetative": "शाकीय वाढ",
            "Flowering": "फुलोरा",
            "Fruiting / Harvest stage": "फळ / काढणी टप्पा",
            "Tomato": "टोमॅटो",
            "Rice": "भात",
            "Maize": "मका",
            "Cotton": "कापूस",
            "Other Vegetables": "इतर भाज्या",
            "Symptoms:": "लक्षणे:",
            "Management:": "व्यवस्थापन:",
            "Organic Control:": "सेंद्रिय नियंत्रण:",
            "Prevention:": "प्रतिबंध:",
            "Crop Health Summary": "पीक आरोग्य सारांश",
            "Crop Image Analysis": "पीक प्रतिमा विश्लेषण",
            "-- Select Crop First --": "-- प्रथम पीक निवडा --",
            "About Our Project 🌾": "आमच्या प्रकल्पाविषयी 🌾",
            "Smart Agriculture Solution – Technology for Better Farming": "स्मार्ट शेती उपाय – उत्तम शेतीसाठी तंत्रज्ञान",
            "📌 Problem Statement": "📌 समस्या विधान",
            "The community faces significant challenges due to the misuse and overuse of chemical pesticides, leading to reduced soil fertility, crop damage, and health risks for farmers and consumers. There is limited access to reliable and crop-specific guidance on safe and effective pesticide usage.": "रासायनिक कीटकनाशकांच्या गैरवापरामुळे आणि अतिवापरामुळे समुदायाला मोठ्या आव्हानांचा सामना करावा लागत आहे, ज्यामुळे मातीची सुपीकता कमी होते, पिकांचे नुकसान होते आणि शेतकरी व ग्राहकांसाठी आरोग्याचे धोके निर्माण होतात. सुरक्षित आणि प्रभावी कीटकनाशक वापराबद्दल विश्वासार्ह आणि पीक-विशिष्ट मार्गदर्शनापर्यंत मर्यादित प्रवेश आहे.",
            "This project aims to develop a user-friendly advisory system that provides accurate recommendations on pesticide selection and dosage based on crop type, pest identification, and local conditions, promoting sustainable and safe farming practices.": "पिकाचा प्रकार, कीटक ओळख आणि स्थानिक परिस्थितीवर आधारित कीटकनाशक निवड आणि डोसवर अचूक शिफारसी प्रदान करणारी वापरकर्ता-अनुकूल सल्लागार प्रणाली विकसित करणे हा या प्रकल्पाचा उद्देश आहे, ज्यामुळे शाश्वत आणि सुरक्षित शेती पद्धतींना प्रोत्साहन मिळते.",
            "🎯 Project Objectives": "🎯 प्रकल्पाची उद्दिष्टे",
            "Reduce Overuse of Pesticides": "कीटकनाशकांचा अतिवापर कमी करा",
            "Provide accurate, crop-specific pesticide recommendations to minimize excessive usage.": "अतिवापर कमी करण्यासाठी अचूक, पीक-विशिष्ट कीटकनाशक शिफारसी प्रदान करा.",
            "Improve Crop Health and Yield": "पीक आरोग्य आणि उत्पादन सुधारणा",
            "Help farmers select the right pesticide and dosage, reducing crop damage and increasing productivity.": "शेतकऱ्यांना योग्य कीटकनाशक आणि डोस निवडण्यास मदत करा, पिकांचे नुकसान कमी करा आणि उत्पादकता वाढवा.",
            "Promote Safe and Sustainable Farming": "सुरक्षित आणि शाश्वत शेतीला प्रोत्साहन द्या",
            "Encourage environmentally friendly practices and reduce health risks for farmers, consumers, and the ecosystem.": "पर्यावरणपूरक पद्धतींना प्रोत्साहन द्या आणि शेतकरी, ग्राहक व परिसंस्थेसाठी आरोग्याचे धोके कमी करा.",
            "💡 Proposed Solution": "💡 प्रस्तावित उपाय",
            "Our Smart Agriculture Solution is a web application designed to assist farmers with agricultural information. It includes weather updates, irrigation guidance, crop recommendations, soil information, and basic pest symptom guidance through a simple dashboard.": "आमचा स्मार्ट शेती उपाय हा शेतकऱ्यांना शेतीविषयीच्या माहितीसह मदत करण्यासाठी डिझाइन केलेले एक वेब अनुप्रयोग आहे. यामध्ये हवामानाचे अपडेट्स, सिंचन मार्गदर्शन, पीक शिफारसी, मातीची माहिती आणि साध्या डॅशबोर्डद्वारे मूलभूत कीटक लक्षण मार्गदर्शन समाविष्ट आहे."
        }
    };

    const languageNames = {
        en: "English",
        hi: "हिन्दी",
        kn: "ಕನ್ನಡ",
        te: "తెలుగు",
        ta: "தமிழ்",
        mr: "मराठी"
    };

    const storageKey = "smartAgriLanguage";
    let currentLanguage = localStorage.getItem(storageKey) || "en";

    const originals = new WeakMap();
    const originalAttributes = new WeakMap();

    function normalize(text) {
        if (!text) return "";
        return String(text)
            .replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{1F200}-\u{1F2FF}]|[\u{1F000}-\u{1F0ff}]|[\u{2B50}]|[\u{2B55}]|[\u{203D}]|[\u{3299}]|[\u{3297}]|[\u{303D}]|[\u{3030}]|[\u{24C2}]|[\u{1F004}]|[\u{1F0CF}]|[\u{1F170}-\u{1F171}]|[\u{1F17E}-\u{1F17F}]|[\u{1F18E}]|[\u{1F191}-\u{1F19A}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F201}-\u{1F251}]|[\u{1F300}-\u{1F5FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F650}-\u{1F67F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{200d}]|[\u{fe0f}]/gu, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    function translateTextNode(node) {
        const parent = node.parentElement;

        if (
            !parent ||
            parent.closest(
                "#smart-agri-language, script, style, noscript"
            )
        ) {
            return;
        }

        if (!originals.has(node)) {
            originals.set(node, node.nodeValue);
        }

        const original = originals.get(node);
        const clean = normalize(original);

        if (!clean) return;

        const dictionary = translations[currentLanguage] || {};
        const translated = dictionary[clean];

        if (translated !== undefined) {
            const start = original.match(/^\s*/)[0];
            const end = original.match(/\s*$/)[0];

            node.nodeValue = start + translated + end;
        } else if (currentLanguage === "en") {
            node.nodeValue = original;
        }
    }

    function translateAttributes(root) {
        const elements = [];

        if (root.nodeType === 1) {
            elements.push(root);
        }

        if (root.querySelectorAll) {
            elements.push(...root.querySelectorAll(
                "input, textarea, button, [title], [aria-label]"
            ));
        }

        elements.forEach(element => {
            ["placeholder", "title", "aria-label"].forEach(attribute => {
                if (!element.hasAttribute(attribute)) return;

                let saved = originalAttributes.get(element);

                if (!saved) {
                    saved = {};
                    originalAttributes.set(element, saved);
                }

                if (saved[attribute] === undefined) {
                    saved[attribute] = element.getAttribute(attribute);
                }

                const original = saved[attribute];
                const key = normalize(original);

                element.setAttribute(
                    attribute,
                    translations[currentLanguage][key] ?? original
                );
            });
        });
    }

    function translatePage() {
        document.documentElement.lang = currentLanguage;

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
        );

        let node;

        while ((node = walker.nextNode())) {
            translateTextNode(node);
        }

        document.querySelectorAll("option").forEach(option => {
            if (!option.dataset.originalText) {
                option.dataset.originalText = option.textContent;
            }

            const original = option.dataset.originalText;
            const key = normalize(original);

            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                option.textContent = translations[currentLanguage][key];
            }
        });

        translateAttributes(document.body);

        const selector = document.getElementById("smartAgriLanguage");

        if (selector) {
            selector.value = currentLanguage;
        }
    }

    function addLanguageSelector() {
        if (document.getElementById("smart-agri-language")) return;

        const wrapper = document.createElement("div");
        wrapper.id = "smart-agri-language";
        wrapper.style.cssText = "position: fixed; top: 12px; right: 20px; z-index: 9999; background: #ffffff; padding: 6px 12px; border-radius: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 8px; font-family: sans-serif; font-size: 14px;";

        wrapper.innerHTML = `
            <label for="smartAgriLanguage" style="margin: 0; font-weight: bold; color: #1b5e20;">🌐 Language:</label>
            <select id="smartAgriLanguage" aria-label="Choose language" style="padding: 4px 8px; border-radius: 8px; border: 1px solid #c8e6c9; background: #fafdf8; cursor: pointer; font-size: 14px; outline: none;">
            </select>
        `;

        const selector = wrapper.querySelector("select");

        Object.entries(languageNames).forEach(([code, name]) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = name;
            selector.appendChild(option);
        });

        selector.value = currentLanguage;

        selector.addEventListener("change", function () {
            currentLanguage = this.value;

            localStorage.setItem(storageKey, currentLanguage);

            translatePage();
        });

        document.body.appendChild(wrapper);
    }

    function startLanguageSystem() {
        addLanguageSelector();
        translatePage();

        const observer = new MutationObserver(records => {
            records.forEach(record => {
                record.addedNodes.forEach(addedNode => {
                    if (addedNode.nodeType === Node.TEXT_NODE) {
                        translateTextNode(addedNode);
                    }

                    if (addedNode.nodeType === Node.ELEMENT_NODE) {
                        const walker = document.createTreeWalker(
                            addedNode,
                            NodeFilter.SHOW_TEXT
                        );

                        let textNode;

                        while ((textNode = walker.nextNode())) {
                            translateTextNode(textNode);
                        }

                        translateAttributes(addedNode);
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            startLanguageSystem
        );
    } else {
        startLanguageSystem();
    }

})();