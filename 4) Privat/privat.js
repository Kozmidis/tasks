const object = {
  _value: null,
  _validator: null,

  getValue() {
    if (this._validator !== this._value) {
      this._value = this._validator;
    }
    return this._value;
  },

  setValue(value) {
    this._value = value;
    this._validator = value;
  },
};

object.setValue(42);
object._value = 73;
object.getValue();
