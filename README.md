
# Auth
- Bao gồm `RegisterPage` và `Regiser Form`
- `RegisterPage` sẽ chứa `register form`
- `RegisterPage` sẽ handle logic lúc register `form submit`

# userSlice 
-   async action, thực hiện gọi API

# createAsyncThunk
- Bản chất sử dụng middleware redux thunk => giúp tạo ra những async action
- hàm unwrapResult: giúp lấy được kết quả của payload, nếu success, sẽ throw error nếu bị rejected








            User                             |             Server

1. Trong useEffect User gửi request lấy tin        1. Xử lý request và trả về list message
nhắn và update vào state

2. Kiểm tra state có dữ liệu chưa                  
-> Nếu có thì join room, nếu chưa thì thôi


3. Xử lý ở handleFormSubmit check state nếu       3. Nhận  

+ Nếu > 0 thì -> đã chat 
(bởi vì đã chat thì lúc nó gửi request 
lấy message về update state thì state 
mới có dữ liệu )
=> Chỉ xử lý chat thôi, vì join room là đã
xử lý ở bước 2

+ Nếu === 0 -> chưa chat 
(vì nó có chat đâu mà lúc gửi request 
nó lấy message đâu ra mà update vào state).
=> Xử lý cả chat và join room



Nếu có tin nhắn thì join room luôn -> join ở đâu? 



1. Nếu === 0 -> tạo room và join room đó luôn đúng không?
2. Nếu > 0 thì chỉ chat -> chat với room nào -> idRoom ở đâu ra.







