// Observer Interface
class Observer {
    update(phoneNumber) {}
  }
  
  // Concrete Observers
  class PrintPhoneNumberObserver extends Observer {
    update(phoneNumber) {
      console.log(`Phone number dialed: ${phoneNumber}`);
    }
  }
  
  class PrintCustomMessageObserver extends Observer {
    // Fixed: extends Observer
    update(phoneNumber) {
      console.log(`Now Dialling ${phoneNumber}`);
    }
  }
  
  // Subject (Observable)
  class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach((observer) => observer.update(phoneNumber));
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      this.phoneNumbers = this.phoneNumbers.filter((num) => num !== phoneNumber);
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        this.notifyObservers(phoneNumber);
      } else {
        console.log("Phone number not found.");
      }
    }
  }
  
  // Usage
  const telephone = new Telephone();
  
  // Add observers
  telephone.addObserver(new PrintPhoneNumberObserver());
  telephone.addObserver(new PrintCustomMessageObserver());
  
  // Add phone numbers
  telephone.addPhoneNumber("1234567890");
  telephone.addPhoneNumber("2347023232");
  
  // Dial a phone number
  telephone.dialPhoneNumber("1234567890");
  telephone.dialPhoneNumber("2347023232");
  telephone.dialPhoneNumber("9999999999"); // Not added, so no observer notification