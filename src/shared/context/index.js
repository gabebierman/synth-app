import { SynthProvider } from "./SynthContext";
import { SnareProvider } from "./SnareContext";
import { KickProvider } from "./KickContext";
import { HatProvider } from "./HatContext";

export default function StateProvider(props) {
    return (
        <SynthProvider>
            <SnareProvider>
                <KickProvider>
                    <HatProvider>{props.children}</HatProvider>
                </KickProvider>
            </SnareProvider>
        </SynthProvider>
    );
}
