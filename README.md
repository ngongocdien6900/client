# Auth

- Bao gồm `RegisterPage` và `Regiser Form`
- `RegisterPage` sẽ chứa `register form`
- `RegisterPage` sẽ handle logic lúc register `form submit`

# userSlice

- async action, thực hiện gọi API

# createAsyncThunk

- Bản chất sử dụng middleware redux thunk => giúp tạo ra những async action
- hàm unwrapResult: giúp lấy được kết quả của payload, nếu success, sẽ throw error nếu bị rejected
