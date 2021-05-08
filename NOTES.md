# Project Notes:
## Remote vs Local
Lot's of back and forth about how client side models should relate to each other.  At this point, I'm thinking it's gotta just be straight view-model.  Don't try to plan ahead for the nodejs based cli.

## Models
Having a class for each "model" may not really make sense the way I'm doing it now, these might be better conceived as just interfaces.  This is just a way to type the props of some components...

The real "model" here is probably a service class for connecting to the backend, which might want to use the previously mentioned interfaces in a generic way.