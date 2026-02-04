import ReducerHook from './Hooks/ReducerHook';
import FormData from './Hooks/ReducerFormData';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import LayoutExample from './Hooks/LayoutExample1';
import LayoutExamples from './Hooks/LayoutExample2';
import LayoutChat from './Hooks/LayoutChat';
import EffectEventHook from './Hooks/EffectEventHook';
import EffectEventForm from './Hooks/EffectEventForm';
import ActivityFeature from './Hooks/ActivityFeature';
import ToggleTest from './Hooks/ToogleTest';

function App() {
  return (
    <>
      {/* UseReducer Hook ............ 
       <ReducerHook /> 
       <FormData /> 
       UseReducer Hook ............  */}
      {/* <UseLayoutEffect /> */}

      {/* UseLayoutEffect Hook..............
      <LayoutExample/>
      <LayoutExamples />
      <LayoutChat />
    UseLayoutEffect Hook.............. */}

      {/* UseEffectEvent Hook..............
       <EffectEventHook />
       <EffectEventForm />
    UseEffectEvent Hook.............. */}

      {/* Activity Feature in React ......... New in React
      <ActivityFeature />
       */}

      {/* Custom Hooks  */}
      <ToggleTest />
    </>
  );
}

export default App;
