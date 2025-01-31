import { produce, enableMapSet } from 'immer';
import type { IStyleType } from '../types';
import type {
  IRegisterComponentArgs,
  TInteractionPseudoSelectors,
} from '../types/store.types';
import ComponentNode from './ComponentNode';
import { createStore } from './generator';

enableMapSet();

const storeManager = createStore({
  components: new Map<string, ComponentNode>(),
});

function findComponentChildIDs(parentID: string) {
  const childs = storeManager.getState().components.values();
  const childsFound: string[] = [];
  for (const current of childs) {
    if (current.parentComponentID === parentID && current.hasGroupInteractions) {
      childsFound.push(current.id);
      const recursiveChilds = findComponentChildIDs(current.id);
      childsFound.push(...recursiveChilds);
    }
  }
  return childsFound;
}

function registerComponent(input: IRegisterComponentArgs) {
  let component: ComponentNode;
  const parentComponent = storeManager.getState().components.get(input.parentID);
  let childStyles: IStyleType = {};
  if (parentComponent) {
    childStyles = parentComponent.getChildStyles(input);
  }
  component = new ComponentNode({
    ...input,
    inlineStyles: [input.inlineStyles, childStyles],
  });
  storeManager.setState((prevState) => {
    return produce(prevState, (draft) => {
      draft.components.set(component.id, Object.assign(component));
    });
  });
  return component.id;
}

function unregisterComponent(id: string) {
  storeManager.setState((prevState) => {
    return produce(prevState, (draft) => {
      draft.components.delete(id);
    });
  });
}

function setComponentInteractionState(
  target: ComponentNode,
  interaction: TInteractionPseudoSelectors,
  value: boolean,
) {
  storeManager.setState((prevState) => {
    const producer = produce(prevState, (draft) => {
      const component = draft.components.get(target.id);
      component?.setInteractionState(interaction, value);
      if (component?.isGroupParent) {
        const childs = findComponentChildIDs(target.id);
        childs.forEach((childID) => {
          const child = draft.components.get(childID);
          if (child?.hasGroupInteractions) {
            child?.setInteractionState('group-hover', value);
          }
        });
      }
    });
    return producer;
  });
}

export default storeManager;
export { registerComponent, unregisterComponent, setComponentInteractionState };
