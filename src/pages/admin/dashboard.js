import AdminNav from "../../components/adminNav";

const Dashboard = {
    render() {
        return /* html */`
        <div> ${AdminNav.render()}</div>
        <main>
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                Thống Kê
            </h1>
        </div>
  </main>
        `;
    },
};
export default Dashboard;