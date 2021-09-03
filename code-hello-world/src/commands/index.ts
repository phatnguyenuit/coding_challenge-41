import { RegisterCommandCreator } from '../typings/types';
import helloPrompt from './helloPrompt';
import helloWorld from './helloWorld';
import quickPick from './quickPick';
import getTextSelection from './getTextSelection';

const commands: Record<SupportedCommand, RegisterCommandCreator> = {
  'code-hello-world.helloWorld': helloWorld,
  'code-hello-world.helloPrompt': helloPrompt,
  'code-hello-world.quickPick': quickPick,
  'code-hello-world.getTextSelection': getTextSelection,
};

export default commands;
