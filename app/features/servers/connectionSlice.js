/**
 * 서버 접속 redis instance
 */

import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
  name: 'connections',
  initialState: {
    // 결과 보여줘야 하나?
    showResult: false,
    // 접속 성공 여부
    connectResult: false,
    // 접속 시도중 인가?
    isConnecting: false,
    // 접속 정보
    config: {},
  },
  reducers: {
    connectToServer: (state, action) => {
      return { ...state, config: action.payload};
    },
    connected: (state, action) => {
      return { ...state, config: action.payload};
    },
    disconnected: (state, action) => {
      // state.instances.filter((server) => server.id !== action.payload.id);
      return state;
    },
    startConnecting: (state, action) => {
      return { ...state, isConnecting: true};
    },
    stopConnecting: (state, action) => {
      return { ...state, isConnecting: false};
    },
    connectSuccess: (state, action) => {
      return { ...state, connectResult: true, instance: action.payload };
    },
    connectFailed: (state, action) => {
      return { ...state, connectResult: false, instance: null };
    },
    setShowResult: (state, action) => {
      return { ...state, showResult: action.payload};
    },
  },
});

export const {
  connectToServer,
  connected,
  disconnected,
  startConnecting,
  stopConnecting,
  connectSuccess,
  connectFailed,
  setShowResult,
} = connectionSlice.actions;

export default connectionSlice.reducer;

