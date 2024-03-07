let eventMixin = {
    /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
  */
    on(eventName, handler){
        // If there is no property meaning no subscription _eventHandlers then create it
        if(!this._eventHandlers) this._eventHandlers = {};
        // If there is no event named eventName then create it
        if(!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
        // Add the handler to the event
        this._eventHandlers[eventName].push(handler);
    },

    /**
     * Cancel the subscription, usage:
     * menu.off('select', handler)
     * 
    */
    off(eventName, handler){
        let handlers = this._eventHandlers?.[eventName];
        if(!handlers) return;
        for(let i = 0; i < handlers.length; i++){
            if(handlers[i] === handler){
                handlers.splice(i--, 1);
                // delete i then i-- to avoid skipping the next element
            }
        }
    },

    /**
     * Generate an event with the given name and data
     * this.trigger('select', data1, data2);
    */

    trigger(eventName, ...args){
        if(this._eventHandlers?.[eventName]){
            this._eventHandlers[eventName].forEach(handler => handler.apply(this, args))
        }
        else return;
    },
}

class Menu {
    choose(value){
        this.trigger("select", value);
    }
}
// Add the mixin to the class
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on("select", value => console.log(`Value selected: ${value}`));
menu.choose("123");