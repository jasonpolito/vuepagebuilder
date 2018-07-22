<template>
  <div>
      <el-dialog :visible.sync="dialog" v-if="inspectedBlock">
        <div>
          <el-tabs v-model="tab">
            <el-tab-pane label="General" name="first">
              <el-color-picker v-model="inspectedBlock.color" @active-change="test"></el-color-picker>
            </el-tab-pane>
            <el-tab-pane label="Chilren" name="second">
              <draggable v-model="list" class="flex flex-wrap" :options="pageDaggableOptions">
                <div v-for="block in children" :key="block.id" class="w-full py-4">{{ block.component }}</div>
              </draggable>
            </el-tab-pane>
          </el-tabs>
        </div>
        <span></span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeDialog">Cancel</el-button>
          <el-button type="primary" @click="closeDialog">Confirm</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import blockMixin from "~/mixins/block";

export default {
  mixins: [blockMixin],
  data() {
    return {
      tab: "first"
    };
  },
  computed: {
    ...mapGetters({
      inspectedBlock: "blocks/inspectedBlock",
      dialogState: "ui/inspectBlockDialog"
    }),
    children() {
      return this.blockChildren(this.inspectedBlock.id);
    },
    dialog: {
      get() {
        return this.dialogState;
      },
      set(val) {
        this.setDialog(val);
      }
    }
  },
  methods: {
    test(val) {
      console.log(val);
    },
    ...mapActions({
      openDialog: "ui/openInspectBlockDialog",
      setDialog: "ui/setInspectBlockDialogState",
      closeDialog: "ui/closeInspectBlockDialog"
    })
  }
};
</script>