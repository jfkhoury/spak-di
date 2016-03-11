import SpecRegistration from "./lib/SpecRegistration";
import CondSpecs from "./lib/CondSpecs";
import SpecFromFn from "./lib/SpecFromFn";
import SpecFromClass from "./lib/SpecFromClass";
import SpecFromValue from "./lib/SpecFromValue";
import ConfigMod from "./lib/ConfigMod";
import SpecWithConfigMod from "./lib/SpecWithConfigMod";
import ActionSpec from "./lib/ActionSpec";
import HooksSpec from "./lib/HooksSpec";
import RegistrySpec from "./lib/RegistrySpec";
import SpecRef from "./lib/SpecRef";

var SpecGroup = SpecRegistration; // Alias for semantics.

export { SpecRegistry, SpecRegistration, SpecGroup, CondSpecs, SpecRef,
         SpecFromFn, SpecFromClass, SpecFromValue,
         ConfigMod, SpecWithConfigMod,
         ActionSpec, HooksSpec, RegistrySpec };
