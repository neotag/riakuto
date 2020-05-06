import { Reducer } from 'redux';
import { CounterAction, CounterActionType } from './actions/counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 };

// 初期化されたとき（操作していないのでActionはない）
// counterReducer({count: 0})

// カウントが7のときに add ボタンを押すと↓の処理になる
// counterReducer(
//   {count: 7},
//   {
//     type: CounterActionType.ADD,
//     amount: 10
//   })
// 以降の処理の中では渡ってきたActionとstateを使ってゴニョゴニョ（処す）して新しい state を返す

const counterReducer: Reducer<CounterState, CounterAction> = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      };
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type;

      return state;
    }
  }
};

export default counterReducer;
