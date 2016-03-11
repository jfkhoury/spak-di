# spak-di
DI for spåK :: Dependency Injection for Single Page Application Kit ::

Implements the `SpakSpecsBuilder` with `DIBuilder`.

The `DIBuilder` uses `wirejs` under the hood providing an implementation that allows components to register via spec objects with the DI system.

Once the `SpakBootstrapper` has asked all components to register it will ask `DIBuilder` to `build` an IocContainer object.

[See our docs](./doc/index.md) for how to register your components.
