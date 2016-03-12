# spåK-di
DI for spåK :: Dependency Injection for Single Page Application Kit ::

Package that takes specification registrations defined by `spak` components to creates objects. `spak-di` uses `wirejs` under the hood.

This package comes with `DIBuilder` (which implements `spak`s `SpecificationsBuilder` interface). 

## Update your `spak` app delegate to use `DIBuilder`
import { DIBuilder } from `spak-di`;

App.run(
    App.Components(...),
    App.Config(...),
    App.Delegate({
        createSpecsBuilder() {
            return new DIBuilder();
        },
        ... // whatever else you hook into.
   }
);
```

## Other Docs
- (./doc/index.md) for how to register your components w/ specs.
- (./doc/di-builder.md) DIBuilder.
