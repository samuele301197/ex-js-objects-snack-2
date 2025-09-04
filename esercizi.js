// Code Question 1:
// senza lanciare il codice, prevedo che entrambi i "riferimenti" all'oggetto sono stati modificati, motivo per cui in console apparirà il valore hamburger.name / secondBurger.name = "Double Cheese Burger";
// Oggetto creato in memoria ce n'è uno solo.

// Code Question 2:
// senza lanciare il codice, prevedo che:
//  hamburger.ingredients[0] = "Salad",
//  secondBurger[0] = "Salad".
// con lo spread operator non si riesce a modificare oggetti annidati.
//  In memoria ci sono due oggetti.

// Code Question 3:
// in memoria ci sono 5 oggetti totali:
// il primo oggetto (hamburger),
// gli oggetti annidati facenti parte dello stesso (maker, restaurant),
// le due copie (secondBurger, thirdBurger).

// Code Question 4:
// Il metodo migliore è lo spread operator, poichè copia anche le funzioni.
// Il metodo migliore per clonare restaurant è structuredClone perchè copia anche oggetti complessi come Date.

// Code Question 5:
// 1 Chef's Hyur
// 2 Hyur's II
// 5 oggetti.
