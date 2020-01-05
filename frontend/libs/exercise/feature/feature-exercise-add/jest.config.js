module.exports = {
  name: 'feature-exercise-add',
  preset: '../../../../jest.config.js',
  coverageDirectory:
    '../../../../coverage/libs/exercise/feature/feature-exercise-add',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
