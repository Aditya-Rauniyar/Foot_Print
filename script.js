document.addEventListener("DOMContentLoaded", () => {
    // Sample meal data
    const meals = [
      { name: "Vegan Tacos", ingredients: "Tortillas, Black Beans, Avocado", calories: 400 },
      { name: "Quinoa Salad", ingredients: "Quinoa, Kale, Lemon", calories: 350 },
      { name: "Chickpea Stir Fry", ingredients: "Chickpeas, Bell Peppers, Soy Sauce", calories: 450 },
      { name: "Lentil Soup", ingredients: "Lentils, Carrots, Celery", calories: 300 },
      { name: "Tofu Curry", ingredients: "Tofu, Coconut Milk, Curry Paste", calories: 500 },
    ];
  
    // Generate meal plan
    function generateMealPlan() {
      const mealPlanContainer = document.getElementById('mealPlanContainer');
      mealPlanContainer.innerHTML = ''; // Clear existing meals
  
      // Select two random meals
      const selectedMeals = [];
      while (selectedMeals.length < 2) {
        const randomIndex = Math.floor(Math.random() * meals.length);
        if (!selectedMeals.includes(meals[randomIndex])) {
          selectedMeals.push(meals[randomIndex]);
        }
      }
  
      selectedMeals.forEach(meal => {
        const mealCard = `
          <div class="col-md-6">
            <div class="card">
              <div class="card-body bg-green-100 shadow-md">
                <h4 class="card-title text-xl font-bold">${meal.name}</h4>
                <p class="card-text">Ingredients: ${meal.ingredients}</p>
                <p class="card-text">Calories: ${meal.calories}</p>
              </div>
            </div>
          </div>
        `;
        mealPlanContainer.innerHTML += mealCard;
      });
      
    }
  
    // Initial meal plan on load
    generateMealPlan();
  
    // Re-generate meal plan on button click
    document.getElementById('generateMealsBtn').addEventListener('click', generateMealPlan);
  
    // Recalculate carbon footprint
    function recalculateCarbon() {
      const newCarbonValue = Math.floor(Math.random() * 10) + 10; // Random value between 10 and 20 kg
      document.getElementById('carbonValue').textContent = `${newCarbonValue} kg CO2`;
    }
  
    document.getElementById('recalculateCarbonBtn').addEventListener('click', recalculateCarbon);
  
    // Smooth scroll for hero button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  