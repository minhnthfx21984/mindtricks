export default function LogoutModal({ signOut }) {
  return (
    <>
      <input type="checkbox" id="logout_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Xác nhận!</h3>
          <p className="py-4">Bạn có muốn đăng xuất không?</p>
          <div className="flex justify-end">
            <button
              className="btn"
              onClick={() => {
                signOut();
              }}
            >
              Đăng Xuất
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="logout_modal">
          Close
        </label>
      </div>
    </>
  );
}
