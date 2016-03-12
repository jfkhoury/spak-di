/*jshint newcap: false */
import Q from "q";
import wire from "wire";
import wirePlugin from "./wirePlugin";

export default class DIBuilder {
    build(specs) {
        return Q(wire(
            specs.all().reduce(this._writeToCfg, this._cfgSeed())
        ));
    }

    _writeToCfg(cfg, spec) {
        spec.registration.writeTo(cfg);
        return cfg;
    }

    _cfgSeed() {
        return {
            $plugins: [wirePlugin]
        };
    }
}
