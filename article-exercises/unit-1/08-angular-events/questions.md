# Explain in as much detail as you can what happens when you click the button. Why does number update in the template without us telling it to?

- The number updates because the scope is attached to the ViewModel and allows two way data binding to happen. Essentially clicking the button generates the number (model) and the controller updates the view.
