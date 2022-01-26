<template>
  <div class="main-wrapper">
    <div class="navbar-bg"></div>
    <!-- Section Navbar Begin -->
      <Navbar />
    <!-- Section Navbar End -->


    <!-- Section Sidebar Begin -->
      <Sidebar />
    <!-- Section Sidebar End -->


    <!-- Section Content Begin -->
    <div class="main-content">
        <Breadcrumb />
            <div class="card-table ml-3 p-4">
            <div class="d-flex align-items-center">
                <h4 class="text-left main-color">Guru Mata Pelajaran <br> SMKN 4 Bandung</h4>
            </div>
            
            <div class="table-responsive">
                <b-table
                table-class="table table-centered w-100"
                thead-tr-class="none"
                :items="tableData"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                :filter="filter"
                :filter-included-fields="filterOn"
                @filtered="onFiltered"
                >
                <template v-slot:cell(no)="data">
                    <div class="d-inline-flex align-items-center">
                    <b> {{ currentPageDetail > 1 ? currentPageDetail * perPage - (perPage-1) + data.index : data.index + 1 }}</b>
                    </div>
                </template>
                <template v-slot:cell(actions)="data">
                    <button type="button" class="link-actions mr-3" @click="viewProject(data.item)" style="border:0px; background:transparent;">
                    View
                    </button>
                    <button type="button" class="link-actions" @click="detailProject(data.item)" style="border:0px; background:transparent;">
                    Details
                    </button>
                </template>
                <template v-slot:cell(created_at)="data">
                    {{timeFormatDate(data.item.created_at)}}
                </template>
                <template v-slot:cell(status)="data">
                    <span class="text-success">{{data.item.status}}</span>
                </template>
                </b-table>
                <div class="row">
                <div class="col">
                    <div class="dataTables_paginate paging_simple_numbers float-right">
                    <ul class="pagination">
                        <b-pagination v-model="currentPageDetail" :total-rows="totalData" :per-page="perPage" prev-text="Prev" next-text="Next"></b-pagination>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/navigation/Navbar.vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { getDataGuru } from '@/services/guru/guru.service.js'

export default {
    name: 'Mata Pelajaran',
    components: {
        Navbar,
        Sidebar,
        Breadcrumb
    },
    data: function() {
        return {
            tableData: [],
            dataGuru: [],
            currentPage: 1,
            currentPageDetail: 1,
            totalPageUser: 1,
            totalRows: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterData: null,
            filterOn: [],
            sortBy: 'no',
            sortDesc: false,
            fields: [
                {
                    sortable: true,
                    key: 'no',
                    label: 'No',
                },
                {
                    key: 'guru.nama_guru',
                    label: 'Nama Guru',
                    sortable: true,
                },
                {
                    key: 'guru.kode_guru',
                    label: 'Kode Guru',
                    sortable: true,
                },
                {
                    key: 'nama_matpel',
                    label: 'Mata Pelajaran',
                    sortable: true,
                },
            ],
            totalData: 0,
            totalDataDetail: 0,
        }
    },
    mounted(){
        this.getData()
    },
    methods: {
        getData(){
            getDataGuru()
            .then((result) => {
                this.tableData = (result.data).sort((a, b) => {return b.updatedAt - a.updatedAt});
                console.log(this.tableData)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style scoped>
</style>