/* eslint-disable */
const title = {
  type: "title",
  title: "",
  description: "",
};
// eslint-disable-next-line
const inputFile = {
  type: "input-file",
  label: "",
  required: true,
  selectOne: false,
  value: "",
  name: "",
  labelNote: "",
  disabled: false,
};

const inputImage = {
  type: "input-image",
  label: "",
  required: true,
  selectOne: false,
  value: "",
  name: "",
  labelNote: "",
  disabled: false,
};

const inputText = {
  type: "input-text",
  name: "",
  label: "",
  required: true,
  placeholder: "入力してください",
  value: "",
  searchIcon: false,
  selectOne: false,
  labelNote: "",
  apiSearch: "",
  disabled: false,
};

const inputRadio = {
  type: "input-radio",
  name: "",
  label: "",
  value: "",
  select: [],
  required: true,
  selectOne: false,
  labelNote: "",
  disabled: false,
};

const inputSingleDate = {
  type: "input-single-date",
  required: true,
  value: {
    day: "",
    month: "",
    year: "",
  },
  label: "",
  name: "",
  selectOne: false,
  labelNote: "",
  disabled: false,
};

const inputDate = {
  type: "input-date",
  required: true,
  value: "",
  label: "",
  name: "",
  selectOne: false,
  labelNote: "",
  disabled: false,
};
const info = {
  type: "info",
  label: "",
  description: "",
};

const inputNumber = {
  type: "input-number",
  name: "",
  label: "",
  required: true,
  selectOne: false,
  placeholder: "半角",
  value: "",
  labelNote: "",
  disabled: false,
};

const inputSelect = {
  type: "input-select",
  select: [],
  value: "",
  name: "",
  label: "",
  selectOne: false,
  required: true,
  labelNote: "",
  placeholder: "選択してください",
  disabled: false,
};

const inputRange = {
  type: "input-range",
  valueFrom: "",
  valueTo: "",
  label: "",
  required: true,
  selectOne: false,
  name: "",
  labelNote: "",
  disabled: false,
  buttonName: "",
  placeholderFrom: "半角",
  placeholderTo: "半角",
};

const inputArea = {
  type: "input-area",
  value: "",
  label: "",
  placeholder: "入力してください",
  required: true,
  selectOne: false,
  name: "",
  labelNote: "",
  disabled: false,
};

const inputCheckbox = {
  type: "input-checkbox",
  value: false,
  label: "",
  required: true,
  selectOne: false,
  name: "",
  labelNote: "",
  disabled: false,
};

const state = {
  name: "入社手続きの登録をお願いいたします",
  finish: false,
  field: {
    avatar: [
      {
        ...title,
        title: "顔写真の登録",
        description:
          "システムの本人アイコンに使用します。あなたの顔が分かる写真を登録してください。未登録の場合、姓名の頭文字が表示されます。顔写真見本のように撮影してください。また、背景は白、スーツ着用、身だしなみルールに沿って撮影をお願いいたします。",
      },
      {
        ...inputImage,
        required: false,
        name: "avatar",
      },
    ],
    documentId: [
      {
        ...title,
        title: "本人確認書類",
      },
      {
        ...inputFile,
        label: "運転免許証両面もしくは住民票を添付してください。",
        required: true,
        selectOne: false,
        value: "",
        name: "documentId",
      },
    ],
    basicInfo: [
      {
        ...title,
        title: "基本情報登録",
        description:
          "外国式氏名が戸籍に記載されている場合、国際結婚により戸籍上の姓が外国式の姓となっている、もしくは重国籍で戸籍上の氏名が外国式の氏名となっている場合、戸籍上の綴りで入力してください。",
      },
      {
        ...inputText,
        label: "姓",
        name: "surName",
      },
      {
        ...inputText,
        label: "名",
        name: "primaryName",
      },
      {
        ...inputText,
        label: "セイ",
        name: "surNameBuffer",
      },
      {
        ...inputText,
        label: "メイ",
        name: "mainJob",
      },
      {
        ...inputText,
        label: "姓（ローマ字）",
        name: "lastName",
      },
      {
        ...inputText,
        label: "名（ローマ字）",
        name: "firstName",
      },
      {
        ...inputRadio,
        label: "性別",
        select: ["男性", "女性"],
        name: "gender",
      },
      {
        ...JSON.parse(JSON.stringify(inputSingleDate)),
        name: "birthDay",
      },
      {
        ...info,
        label: "年齢",
        description: "生年月日を入力すると表示されます",
      },
      {
        ...inputText,
        required: false,
        label: "ビジネスネーム",
        labelNote: "旧姓を利用する等の場合に入力をしてください。",
        name: "businessName",
      },
    ],
    finalEducation: [
      {
        ...title,
        title: "最終学歴",
        description:
          "最終学歴が大学院の方は、大学を登録後に「＋学歴を追加する」から大学院を登録してください。",
      },
      {
        ...info,
        label: "学歴1",
      },
      {
        type: "multivalue",
        number: 2,
        button: "通勤方法を追加する",
        dataModel: [
          [
            {
              ...inputDate,
              label: "入学年月日",
              name: "dataOfAdmission",
            },
            {
              ...inputDate,
              label: "卒業年月日",
              name: "graduationDate",
            },
            {
              ...inputSelect,
              label: "学歴区分",
              select: [
                "選択してください",
                "選択してください",
                "選択してください",
              ],
              required: false,
              name: "aducationBackground",
            },
            {
              ...inputText,
              label: "学校名",
              searchIcon: true,
              apiSearch: "",
              name: "schoolName",
              placeholder: "フリーワードで検索できます",
            },
          ],
        ],
      },
      {
        ...inputText,
        label: "学部名",
        required: false,
        name: "facultyName",
      },
    ],
    insurancePension: [
      {
        ...title,
        title: "保険年金",
      },
      {
        ...inputText,
        label: "基礎年金番号",
        name: "basicPension",
      },
      {
        ...inputText,
        label: "雇用保険被保険者番号",
        labelNote: "番号をお持ちの方は必ず入力してください",
        required: false,
        name: "insuranceInsuredNumber",
      },
      {
        ...inputText,
        label: "前職会社名",
        labelNote: "雇用保険番号が不明の場合は入力をしてください",
        required: false,
        name: "previosCompanyName",
      },
      {
        ...inputFile,
        label: "資格証明書類（年金手帳）",
        labelNote: "年金手帳の写真を添付してください",
        required: false,
        name: "pensionNotebook",
      },
      {
        ...inputFile,
        label: "資格署名書類（雇用保険被保険者証）",
        labelNote: "雇用保険被保険者証の写真を添付してください",
        required: false,
        name: "qualificationSignatureDocuments",
      },
      {
        ...inputRadio,
        select: ["希望する", "利用しない"],
        label: "確定拠出年金の利用希望",
        required: false,
        name: "useDefinedContributionPension",
      },
    ],
    payRollAccount: [
      {
        ...title,
        title: "給与振込口座",
      },
      {
        ...inputText,
        searchIcon: true,
        apiSearch: "",
        label: "金融機関をフリーワードで検索",
        labelNote: "｢とうきょう｣や｢しんよう｣などの一単語のみで検索できます",
        placeholder: "フリーワードで検索できます",
        name: "financialInstitutions",
      },
      {
        ...inputText,
        searchIcon: true,
        apiSearch: "",
        label: "支店名をフリーワードで検索",
        labelNote: "｢しんじゅく｣や｢しぶや｣などの一単語のみで検索できます",
        placeholder: "フリーワードで検索できます",
        name: "branchName",
        disabled: true,
        active: "financialInstitutions",
      },
      {
        ...info,
        label: "口座預金科目",
      },
      {
        ...info,
        label: "普通",
      },
      {
        ...inputText,
        label: "口座番号（半角）",
        name: "accountNumber",
      },
      {
        ...inputText,
        label: "口座名義（カタカナ）",
        labelNote: "本人名義に限ります",
        name: "accountName",
      },
      {
        ...inputRange,
        label: "郵便番号",
        buttonName: "住所取得",
        name: "addressAcquisition",
      },
    ],
    residenceCard: [
      {
        ...title,
        title: "在留カード（外国籍の方はご記入ください）",
      },
      {
        ...inputCheckbox,
        label: "外国籍の方はチェックを入れてください",
        name: "residenceCard",
      },
      {
        ...inputText,
        label: "名",
        disabled: true,
        name: "residenceName",
        active: "residenceCard",
      },
    ],
  },
};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
